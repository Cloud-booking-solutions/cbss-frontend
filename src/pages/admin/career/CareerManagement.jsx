import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

const CareerManagement = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    requirements: []
  });
  const { toast } = useToast();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminAuth');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://cbss-frontend.onrender.com/api/career', {
        headers: getAuthHeaders(),
        credentials: 'include'
      });
      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch jobs",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'requirements') {
      // Split requirements by new line and filter out empty lines
      const reqArray = value.split('\n').filter(req => req.trim() !== '');
      setNewJob(prev => ({
        ...prev,
        [name]: reqArray
      }));
    } else {
      setNewJob(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://cbss-frontend.onrender.com/api/career', {
        method: 'POST',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(newJob)
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        throw new Error('Failed to add job');
      }

      const addedJob = await response.json();
      setJobs(prev => [...prev, addedJob]);
      
      // Show success message
      toast({
        title: "Success",
        description: "Job posting added successfully",
      });
      
      // Reset form and close dialog
      setNewJob({
        title: '',
        description: '',
        requirements: []
      });
      setIsAddModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to add job",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://cbss-frontend.onrender.com/api/career/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
        credentials: 'include'
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        throw new Error('Failed to delete job');
      }

      setJobs(prev => prev.filter(job => job._id !== id));
      toast({
        title: "Success",
        description: "Job posting deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete job",
        variant: "destructive",
      });
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://cbss-frontend.onrender.com/api/career/${editingJob._id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(newJob)
      });

      if (!response.ok) {
        if (response.status === 401) {
          navigate('/admin/login');
          return;
        }
        throw new Error('Failed to update job');
      }

      const updatedJob = await response.json();
      setJobs(prev => prev.map(job =>
        job._id === editingJob._id ? updatedJob : job
      ));
      
      toast({
        title: "Success",
        description: "Job posting updated successfully",
      });
      
      setEditingJob(null);
      setIsEditModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to update job",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Career Management</h1>
          <Button className="flex items-center gap-2" onClick={() => setIsAddModalOpen(true)}>
            <PlusCircle className="w-4 h-4" />
            Add New Job
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map(job => (
            <Card key={job._id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {job.title}
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleDelete(job._id)}>
                      <Trash className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => {
                      setEditingJob(job);
                      setNewJob({
                        title: job.title,
                        description: job.description,
                        requirements: job.requirements
                      });
                      setIsEditModalOpen(true);
                    }}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Description</h3>
                  <p className="text-sm text-gray-600">{job.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Requirements</h3>
                  <ul className="list-disc list-inside">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Add Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Job Posting"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              name="title"
              value={newJob.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              name="description"
              value={newJob.description}
              onChange={handleInputChange}
              required
              className="min-h-[100px]"
            />
          </div>
          <div>
            <Label htmlFor="requirements">Requirements (one per line)</Label>
            <Textarea
              id="requirements"
              name="requirements"
              value={newJob.requirements.join('\n')}
              onChange={handleInputChange}
              required
              className="min-h-[100px]"
              placeholder="Enter each requirement on a new line"
            />
          </div>
          <Button type="submit" className="w-full">Add Job Posting</Button>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Job Posting"
      >
        {editingJob && (
          <form onSubmit={handleEdit} className="space-y-4">
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                name="title"
                value={newJob.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                name="description"
                value={newJob.description}
                onChange={handleInputChange}
                required
                className="min-h-[100px]"
              />
            </div>
            <div>
              <Label htmlFor="requirements">Requirements (one per line)</Label>
              <Textarea
                id="requirements"
                name="requirements"
                value={newJob.requirements.join('\n')}
                onChange={handleInputChange}
                required
                className="min-h-[100px]"
                placeholder="Enter each requirement on a new line"
              />
            </div>
            <Button type="submit" className="w-full">Update Job Posting</Button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default CareerManagement; 