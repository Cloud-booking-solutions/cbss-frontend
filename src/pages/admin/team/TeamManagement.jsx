import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Pencil, Trash } from 'lucide-react';
import Modal from "@/components/ui/modal";

const TeamManagement = () => {
  const navigate = useNavigate();
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    image: '',
    type: 'expert'
  });
  const { toast } = useToast();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [activeTab, setActiveTab] = useState('expert');
  const [uploadMethod, setUploadMethod] = useState('url'); // 'url' or 'file'
  const [file, setFile] = useState(null);
  const [urlError, setUrlError] = useState('');

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminAuth');
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    };
  };

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch('https://cbss-backend.onrender.com/api/team', {
        headers: getAuthHeaders(),
        credentials: 'include'
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        throw new Error('Failed to fetch team members');
      }
      
      const data = await response.json();
      setTeamMembers(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch team members",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files[0]);
      setNewMember(prev => ({ ...prev, image: '' }));
    } else {
      setNewMember(prev => ({ ...prev, [name]: value }));
      if (name === 'image') setFile(null);
      if (name === 'image') setUrlError('');
    }
  };

  const validateForm = () => {
    if (uploadMethod === 'url') {
      if (!newMember.image) {
        setUrlError('Please provide an image URL');
        return false;
      }
      try {
        new URL(newMember.image);
      } catch {
        setUrlError('Please enter a valid image URL');
        return false;
      }
    } else {
      if (!file) {
        setUrlError('Please select an image file');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      let response;
      if (uploadMethod === 'file') {
        const formDataToSend = new FormData();
        formDataToSend.append('name', newMember.name);
        formDataToSend.append('role', newMember.role);
        formDataToSend.append('type', activeTab);
        formDataToSend.append('file', file);
        response = await fetch('https://cbss-backend.onrender.com/api/team', {
          method: 'POST',
          headers: {
            'Authorization': getAuthHeaders()['Authorization']
          },
          credentials: 'include',
          body: formDataToSend
        });
      } else {
        const memberData = {
          ...newMember,
          type: activeTab
        };
        response = await fetch('https://cbss-backend.onrender.com/api/team', {
          method: 'POST',
          headers: getAuthHeaders(),
          credentials: 'include',
          body: JSON.stringify(memberData)
        });
      }
      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Team member added successfully',
        });
        setIsAddModalOpen(false);
        setNewMember({ name: '', role: '', image: '', type: activeTab });
        setFile(null);
        setUploadMethod('url');
        fetchTeamMembers();
      } else {
        throw new Error('Failed to add team member');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to add team member',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://cbss-backend.onrender.com/api/team/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
        credentials: 'include'
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Team member deleted successfully",
        });
        fetchTeamMembers();
      } else {
        throw new Error('Failed to delete team member');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete team member",
        variant: "destructive",
      });
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    
    try {
      const memberData = {
        ...newMember,
        type: editingMember.type // Preserve the original member type
      };

      const response = await fetch(`https://cbss-backend.onrender.com/api/team/${editingMember._id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(memberData)
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Team member updated successfully",
        });
        setIsEditModalOpen(false);
        setEditingMember(null);
        fetchTeamMembers();
      } else {
        throw new Error('Failed to update team member');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to update team member",
        variant: "destructive",
      });
    }
  };

  const filteredMembers = (type) => {
    return teamMembers.filter(member => member.type === type);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Team Management</h1>
      </div>

      <Tabs defaultValue="expert" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="expert">Expert Team</TabsTrigger>
          <TabsTrigger value="intern">Interns</TabsTrigger>
        </TabsList>

        <TabsContent value="expert">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Expert Team Members</h2>
            <Button className="flex items-center gap-2" onClick={() => {
              setNewMember(prev => ({ ...prev, type: 'expert' }));
              setIsAddModalOpen(true);
            }}>
              <PlusCircle className="w-4 h-4" />
              Add Expert
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers('expert').map((member) => (
              <TeamMemberCard
                key={member._id}
                member={member}
                onEdit={() => {
                  setEditingMember(member);
                  setNewMember({
                    name: member.name,
                    role: member.role,
                    image: member.image,
                    type: member.type
                  });
                  setIsEditModalOpen(true);
                }}
                onDelete={() => handleDelete(member._id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="intern">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Intern Team Members</h2>
            <Button className="flex items-center gap-2" onClick={() => {
              setNewMember(prev => ({ ...prev, type: 'intern' }));
              setIsAddModalOpen(true);
            }}>
              <PlusCircle className="w-4 h-4" />
              Add Intern
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers('intern').map((member) => (
              <TeamMemberCard
                key={member._id}
                member={member}
                onEdit={() => {
                  setEditingMember(member);
                  setNewMember({
                    name: member.name,
                    role: member.role,
                    image: member.image,
                    type: member.type
                  });
                  setIsEditModalOpen(true);
                }}
                onDelete={() => handleDelete(member._id)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Add Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => { setIsAddModalOpen(false); setFile(null); setUploadMethod('url'); }}
        title={`Add ${activeTab === 'expert' ? 'Expert' : 'Intern'} Team Member`}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={newMember.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              name="role"
              value={newMember.role}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label>Upload Method</Label>
            <div className="flex space-x-4 mt-2">
              <Button
                type="button"
                variant={uploadMethod === 'url' ? 'default' : 'outline'}
                onClick={() => { setUploadMethod('url'); setFile(null); }}
              >
                URL
              </Button>
              <Button
                type="button"
                variant={uploadMethod === 'file' ? 'default' : 'outline'}
                onClick={() => { setUploadMethod('file'); setNewMember(prev => ({ ...prev, image: '' })); }}
              >
                File Upload
              </Button>
            </div>
          </div>
          {uploadMethod === 'url' ? (
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                value={newMember.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                required={uploadMethod === 'url'}
              />
              {newMember.image && (
                <div className="mt-2">
                  <img
                    src={newMember.image}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded"
                    onError={e => (e.target.style.display = 'none')}
                  />
                </div>
              )}
            </div>
          ) : (
            <div>
              <Label htmlFor="file">Image File</Label>
              <Input
                id="file"
                name="file"
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                required={uploadMethod === 'file'}
              />
              {file && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>
              )}
            </div>
          )}
          {urlError && (
            <p className="text-red-500 text-sm mt-1">{urlError}</p>
          )}
          <Button type="submit" className="w-full">
            Add {activeTab === 'expert' ? 'Expert' : 'Intern'}
          </Button>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={`Edit ${editingMember?.type === 'expert' ? 'Expert' : 'Intern'} Team Member`}
      >
        {editingMember && (
          <form onSubmit={handleEdit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={newMember.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                name="role"
                value={newMember.role}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                value={newMember.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">Update Team Member</Button>
          </form>
        )}
      </Modal>
    </div>
  );
};

// TeamMemberCard component for better organization
const TeamMemberCard = ({ member, onEdit, onDelete }) => (
  <Card key={member._id}>
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        {member.name}
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => onDelete()}>
            <Trash className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => onEdit()}>
            <Pencil className="w-4 h-4" />
          </Button>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {member.image && (
        <div className="aspect-square relative mb-4">
          <img
            src={member.image && member.image.startsWith('/uploads/') ? `https://cbss-backend.onrender.com${member.image}` : member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        </div>
      )}
      <div>
        <h3 className="font-semibold">Role</h3>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </CardContent>
  </Card>
);

export default TeamManagement; 