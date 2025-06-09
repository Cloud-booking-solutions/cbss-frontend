import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Plus, Edit, Trash2, Users, Loader2, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getTeamMembers, addTeamMember, updateTeamMember, deleteTeamMember } from '@/utils/api';
import Modal from "@/components/ui/modal";

const TeamManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    department: '',
    image: '/placeholder.svg'
  });
  
  // Fetch team members when component mounts
  useEffect(() => {
    fetchTeamMembers();
  }, []);
  
  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const data = await getTeamMembers();
      setTeamMembers(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching team members:', err);
      setError('Failed to load team members');
      toast({ 
        title: 'Error', 
        description: 'Failed to load team members', 
        variant: 'destructive' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    console.log('Adding member:', newMember);
    
    if (!newMember.name || !newMember.position) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    
    try {
      const addedMember = await addTeamMember(newMember);
      setTeamMembers([...teamMembers, addedMember]);
      setIsAddModalOpen(false);
      setNewMember({ name: '', position: '', email: '', phone: '', department: '', image: '/placeholder.svg' });
      toast({ title: 'Success', description: 'Team member added successfully!' });
    } catch (err) {
      console.error('Error adding team member:', err);
      toast({ 
        title: 'Error', 
        description: err.msg || 'Failed to add team member', 
        variant: 'destructive' 
      });
    }
  };

  const handleEditMember = async (e) => {
    e.preventDefault();
    console.log('Editing member:', editingMember);
    
    if (!editingMember.name || !editingMember.position) {
      toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }

    try {
      const updatedMember = await updateTeamMember(editingMember._id, editingMember);
      setTeamMembers(teamMembers.map(member => 
        member._id === updatedMember._id ? updatedMember : member
      ));
      setIsEditModalOpen(false);
      setEditingMember(null);
      toast({ title: 'Success', description: 'Team member updated successfully!' });
    } catch (err) {
      console.error('Error updating team member:', err);
      toast({ 
        title: 'Error', 
        description: err.msg || 'Failed to update team member', 
        variant: 'destructive' 
      });
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await deleteTeamMember(id);
      setTeamMembers(teamMembers.filter(member => member._id !== id));
      toast({ title: 'Success', description: 'Team member deleted successfully!' });
    } catch (err) {
      console.error('Error deleting team member:', err);
      toast({ 
        title: 'Error', 
        description: err.msg || 'Failed to delete team member', 
        variant: 'destructive' 
      });
    }
  };

  const openEditModal = (member) => {
    console.log('Opening edit modal for member:', member);
    setEditingMember({ ...member });
    setIsEditModalOpen(true);
  };

  const openAddModal = () => {
    console.log('Opening add modal');
    setNewMember({ name: '', position: '', email: '', phone: '', department: '', image: '/placeholder.svg' });
    setIsAddModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button onClick={() => navigate('/admin/dashboard')} variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <Users className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Team Management</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Manage Team Members</CardTitle>
              <Button onClick={openAddModal}>
                <Plus className="w-4 h-4 mr-2" />
                Add Team Member
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <span className="ml-2">Loading team members...</span>
              </div>
            ) : error ? (
              <div className="text-center py-10 text-red-500">
                <p>{error}</p>
                <Button onClick={fetchTeamMembers} className="mt-4">
                  Try Again
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Photo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                        No team members found. Add your first team member!
                      </TableCell>
                    </TableRow>
                  ) : (
                    teamMembers.map((member) => (
                      <TableRow key={member._id}>
                        <TableCell>
                          <img 
                            src={member.image || '/placeholder.svg'} 
                            alt={member.name} 
                            className="w-10 h-10 rounded-full object-cover" 
                          />
                        </TableCell>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell>{member.position}</TableCell>
                        <TableCell>{member.department}</TableCell>
                        <TableCell>{member.email}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" onClick={() => openEditModal(member)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleDeleteMember(member._id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Add Modal */}
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Add New Team Member"
        >
          <form onSubmit={handleAddMember} className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={newMember.name}
                onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                placeholder="Enter member name"
              />
            </div>
            <div>
              <Label htmlFor="position">Position *</Label>
              <Input
                id="position"
                value={newMember.position}
                onChange={(e) => setNewMember({...newMember, position: e.target.value})}
                placeholder="Enter position/title"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={newMember.email}
                onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                placeholder="member@company.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={newMember.phone}
                onChange={(e) => setNewMember({...newMember, phone: e.target.value})}
                placeholder="+1234567890"
              />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={newMember.department}
                onChange={(e) => setNewMember({...newMember, department: e.target.value})}
                placeholder="e.g., Technology, Marketing"
              />
            </div>
            <Button type="submit" className="w-full">
              Add Team Member
            </Button>
          </form>
        </Modal>

        {/* Edit Modal */}
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Edit Team Member"
        >
          {editingMember && (
            <form onSubmit={handleEditMember} className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Name *</Label>
                <Input
                  id="edit-name"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-position">Position *</Label>
                <Input
                  id="edit-position"
                  value={editingMember.position}
                  onChange={(e) => setEditingMember({...editingMember, position: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={editingMember.email}
                  onChange={(e) => setEditingMember({...editingMember, email: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-phone">Phone</Label>
                <Input
                  id="edit-phone"
                  value={editingMember.phone}
                  onChange={(e) => setEditingMember({...editingMember, phone: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-department">Department</Label>
                <Input
                  id="edit-department"
                  value={editingMember.department}
                  onChange={(e) => setEditingMember({...editingMember, department: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full">
                Update Team Member
              </Button>
            </form>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default TeamManagement;
