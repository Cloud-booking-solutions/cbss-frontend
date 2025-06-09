import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Edit, Trash2, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Modal from "@/components/ui/modal";
import { getBlogs, createBlog, updateBlog, deleteBlog } from '@/utils/api';

const BlogManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [blogs, setBlogs] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({});

  // Load blogs when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: error.response?.data?.msg || 'Failed to fetch blogs', 
        variant: 'destructive' 
      });
    }
  };

  const handleAdd = async () => {
    try {
      if (!newItem.title?.trim() || !newItem.excerpt?.trim() || !newItem.image?.trim()) {
        toast({ 
          title: 'Error', 
          description: 'Please fill in all required fields (title, excerpt, and image)', 
          variant: 'destructive' 
        });
        return;
      }

      // Validate and possibly transform image URL
      let imageUrl = newItem.image.trim();
      try {
        const url = new URL(imageUrl);
        // If it's an iStock photo, replace with a placeholder
        if (url.hostname.includes('istockphoto.com')) {
          imageUrl = 'https://picsum.photos/800/600'; // Use a free placeholder image instead
        }
      } catch (e) {
        toast({ 
          title: 'Error', 
          description: 'Please enter a valid image URL', 
          variant: 'destructive' 
        });
        return;
      }

      const blogData = {
        title: newItem.title.trim(),
        excerpt: newItem.excerpt.trim(),
        content: newItem.content?.trim() || '',
        image: imageUrl,
        status: 'Draft'
      };

      console.log('Submitting blog data:', blogData);
      const response = await createBlog(blogData);
      console.log('Blog created:', response);
      
      if (response) {
        setBlogs(prevBlogs => [...prevBlogs, response]);
        setIsAddModalOpen(false);
        setNewItem({});
        toast({ 
          title: 'Success', 
          description: 'Article added successfully!' 
        });
      }
    } catch (error) {
      console.error('Error adding blog:', error);
      let errorMessage = 'Failed to add article. ';
      
      if (error.status === 500) {
        errorMessage += 'Server error. Please try again later.';
      } else if (error.msg) {
        errorMessage += error.msg;
      } else {
        errorMessage += 'Please check your input and try again.';
      }

      toast({ 
        title: 'Error', 
        description: errorMessage, 
        variant: 'destructive' 
      });
    }
  };

  const handleEdit = async () => {
    try {
      if (!editingItem.title || !editingItem.excerpt || !editingItem.image) {
        toast({ 
          title: 'Error', 
          description: 'Please fill in all required fields (title, excerpt, and image)', 
          variant: 'destructive' 
        });
        return;
      }

      const response = await updateBlog(editingItem._id, editingItem);
      setBlogs(blogs.map(blog => blog._id === editingItem._id ? response : blog));
      setIsEditModalOpen(false);
      setEditingItem(null);
      toast({ 
        title: 'Success', 
        description: 'Article updated successfully!' 
      });
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: error.response?.data?.msg || 'Failed to update article', 
        variant: 'destructive' 
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter(blog => blog._id !== id));
      toast({ 
        title: 'Success', 
        description: 'Article deleted successfully!' 
      });
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: error.response?.data?.msg || 'Failed to delete article', 
        variant: 'destructive' 
      });
    }
  };

  const toggleBlogStatus = async (id) => {
    try {
      const blog = blogs.find(b => b._id === id);
      const newStatus = blog.status === 'Published' ? 'Draft' : 'Published';
      const response = await updateBlog(id, { ...blog, status: newStatus });
      setBlogs(blogs.map(b => b._id === id ? response : b));
      toast({ 
        title: 'Success', 
        description: 'Article status updated!' 
      });
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: error.response?.data?.msg || 'Failed to update article status', 
        variant: 'destructive' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Manage Articles</CardTitle>
              <Button onClick={() => setIsAddModalOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Article
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog._id}>
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell>
                      <Badge variant={blog.status === 'Published' ? 'default' : 'secondary'}>
                        {blog.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(blog.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => {
                          setEditingItem(blog);
                          setIsEditModalOpen(true);
                        }}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant={blog.status === 'Published' ? 'secondary' : 'default'}
                          onClick={() => toggleBlogStatus(blog._id)}
                        >
                          {blog.status === 'Published' ? 'Unpublish' : 'Publish'}
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(blog._id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Modal */}
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Add New Article"
        >
          <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }} className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={newItem.title || ''}
                onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                placeholder="Enter article title"
              />
            </div>
            <div>
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={newItem.excerpt || ''}
                onChange={(e) => setNewItem({...newItem, excerpt: e.target.value})}
                placeholder="Brief description of the article"
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={newItem.content || ''}
                onChange={(e) => setNewItem({...newItem, content: e.target.value})}
                placeholder="Full article content"
                rows={6}
              />
            </div>
            <div>
              <Label htmlFor="image">Image URL *</Label>
              <Input
                id="image"
                type="text"
                value={newItem.image || ''}
                onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
              />
              {newItem.image && (
                <div className="mt-2">
                  <img 
                    src={newItem.image} 
                    alt="Preview" 
                    className="w-20 h-20 object-cover rounded"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              )}
            </div>
            <Button type="submit" className="w-full">
              Add Article
            </Button>
          </form>
        </Modal>

        {/* Edit Modal */}
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Edit Article"
        >
          {editingItem && (
            <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }} className="space-y-4">
              <div>
                <Label htmlFor="edit-title">Title *</Label>
                <Input
                  id="edit-title"
                  value={editingItem.title || ''}
                  onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-excerpt">Excerpt *</Label>
                <Textarea
                  id="edit-excerpt"
                  value={editingItem.excerpt || ''}
                  onChange={(e) => setEditingItem({...editingItem, excerpt: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edit-content">Content</Label>
                <Textarea
                  id="edit-content"
                  value={editingItem.content || ''}
                  onChange={(e) => setEditingItem({...editingItem, content: e.target.value})}
                  rows={6}
                />
              </div>
              <div>
                <Label htmlFor="edit-image">Image URL *</Label>
                <Input
                  id="edit-image"
                  type="text"
                  value={editingItem.image || ''}
                  onChange={(e) => setEditingItem({...editingItem, image: e.target.value})}
                  placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                />
                {editingItem.image && (
                  <div className="mt-2">
                    <img 
                      src={editingItem.image} 
                      alt="Preview" 
                      className="w-20 h-20 object-cover rounded"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                )}
              </div>
              <Button type="submit" className="w-full">
                Update Article
              </Button>
            </form>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default BlogManagement;
