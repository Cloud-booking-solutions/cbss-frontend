import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Modal from "@/components/ui/modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Pencil, Trash, Image, Video, Calendar } from 'lucide-react';

// API base URL
const API_URL = 'https://cbss-backend.onrender.com';

// Function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url) => {
  try {
    // Handle different YouTube URL formats
    let videoId = '';
    
    // Handle youtu.be format
    if (url.includes('youtu.be')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    // Handle youtube.com/watch?v= format
    else if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      videoId = urlParams.get('v');
    }
    // Handle youtube.com/embed/ format
    else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('youtube.com/embed/')[1].split('?')[0];
    }

    if (!videoId) {
      throw new Error('Invalid YouTube URL');
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch (error) {
    console.error('Error parsing YouTube URL:', error);
    return null;
  }
};

const GalleryManagement = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [items, setItems] = useState({ images: [], videos: [], events: [] });
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    type: 'image',
    file: null
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [urlError, setUrlError] = useState('');
  const [uploadMethod, setUploadMethod] = useState('url'); // 'url' or 'file'

  // Get auth token from localStorage
  const getAuthHeaders = () => {
    const adminAuth = localStorage.getItem('adminAuth');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminAuth}`
    };
  };

  // Fetch gallery items on component mount and when active tab changes
  useEffect(() => {
    fetchItems();
  }, [activeTab]);

  const fetchItems = async () => {
    try {
      console.log(`Fetching ${activeTab}...`);
      const response = await fetch(`${API_URL}/api/gallery/${activeTab}`, {
        headers: getAuthHeaders()
      });
      console.log('Fetch response:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`${activeTab} items:`, data);
        setItems(prev => ({
          ...prev,
          [activeTab]: data
        }));
      } else {
        const error = await response.json();
        console.error('Error fetching items:', error);
        toast({
          title: "Error",
          description: error.message || `Failed to fetch ${activeTab}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error fetching items:', error);
      toast({
        title: "Error",
        description: `Failed to fetch ${activeTab}`,
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'file') {
      setFormData(prev => ({
        ...prev,
        file: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

      // Clear URL error when user starts typing a new URL
      if (name === 'url') {
        setUrlError('');
      }
    }
  };

  const handleAddClick = (type) => {
    setFormData({
      title: '',
      description: '',
      url: '',
      type: type,
      file: null
    });
    setUrlError('');
    setUploadMethod('url');
    setIsModalOpen(true);
  };

  const validateForm = () => {
    if (uploadMethod === 'url') {
      if (formData.type === 'video' && formData.url) {
        const embedUrl = getYouTubeEmbedUrl(formData.url);
        if (!embedUrl) {
          setUrlError('Please enter a valid YouTube URL');
          return false;
        }
        formData.url = embedUrl;
      }
      if (!formData.url) {
        setUrlError('Please provide a URL');
        return false;
      }
    } else {
      if (!formData.file) {
        setUrlError('Please select a file');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      
      if (uploadMethod === 'file') {
        formDataToSend.append('file', formData.file);
        console.log('File being sent:', formData.file);
      } else {
        // Use correct field name for each type
        if (formData.type === 'video') {
          formDataToSend.append('videoUrl', formData.url);
        } else {
          // images and events both use imageUrl
          formDataToSend.append('imageUrl', formData.url);
        }
        console.log('URL being sent:', formData.url);
      }

      console.log('Form data being sent:', {
        title: formData.title,
        description: formData.description,
        uploadMethod,
        type: formData.type
      });

      const endpoint = formData.type === 'event' ? 'events' : `${formData.type}s`;
      const response = await fetch(`${API_URL}/api/gallery/${endpoint}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminAuth')}`
        },
        body: formDataToSend
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        setItems(prev => ({
          ...prev,
          [endpoint]: [data, ...prev[endpoint]]
        }));
        toast({
          title: "Success",
          description: `${formData.type} added successfully`,
        });
        setFormData({ title: '', description: '', url: '', type: formData.type, file: null });
        setIsModalOpen(false);
      } else {
        console.error('Server error response:', data);
        toast({
          title: "Error",
          description: data.message || `Failed to add ${formData.type}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error details:', error);
      toast({
        title: "Error",
        description: `Failed to add ${formData.type}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id, type) => {
    try {
      console.log('Attempting to delete item:', id);
      const endpoint = type === 'event' ? 'events' : type;
      const response = await fetch(`${API_URL}/api/gallery/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      console.log('Delete response status:', response.status);
      if (response.ok) {
        setItems(prev => ({
          ...prev,
          [type]: prev[type].filter(item => item._id !== id)
        }));
        toast({
          title: "Success",
          description: "Item deleted successfully",
        });
      } else {
        const error = await response.json();
        console.error('Failed to delete item:', error);
        toast({
          title: "Error",
          description: error.message || "Failed to delete item",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      toast({
        title: "Error",
        description: "Failed to delete item",
        variant: "destructive",
      });
    }
  };

  const renderContent = (type) => {
    const currentItems = items[type];
    const isVideo = type === 'videos';

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map(item => (
          <Card key={item._id} className="overflow-hidden">
            <CardContent className="p-4">
              {isVideo ? (
                <div className="relative pt-[56.25%] mb-4">
                  {item.videoUrl.startsWith('http') ? (
                    <iframe
                      src={item.videoUrl}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={`${API_URL}${item.videoUrl}`}
                      className="absolute top-0 left-0 w-full h-full"
                      controls
                    />
                  )}
                </div>
              ) : (
                <img
                  src={item.imageUrl.startsWith('http') ? item.imageUrl : `${API_URL}${item.imageUrl}`}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(item._id, type)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Gallery Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="images">
                <Image className="w-4 h-4 mr-2" />
                Images
              </TabsTrigger>
              <TabsTrigger value="videos">
                <Video className="w-4 h-4 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="events">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
            </TabsList>

            <div className="mb-4">
              <Button onClick={() => handleAddClick(activeTab.slice(0, -1))}>
                <PlusCircle className="w-4 h-4 mr-2" />
                Add {activeTab.slice(0, -1)}
              </Button>
            </div>

            <TabsContent value="images">
              {renderContent('images')}
            </TabsContent>
            <TabsContent value="videos">
              {renderContent('videos')}
            </TabsContent>
            <TabsContent value="events">
              {renderContent('events')}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Add ${formData.type}`}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={formData.description}
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
                onClick={() => setUploadMethod('url')}
              >
                URL
              </Button>
              <Button
                type="button"
                variant={uploadMethod === 'file' ? 'default' : 'outline'}
                onClick={() => setUploadMethod('file')}
              >
                File Upload
              </Button>
            </div>
          </div>
          {uploadMethod === 'url' ? (
            <div>
              <Label htmlFor="url">
                {formData.type === 'video' ? 'YouTube URL' : 'Image URL'}
              </Label>
              <Input
                id="url"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                required
              />
            </div>
          ) : (
            <div>
              <Label htmlFor="file">File</Label>
              <Input
                id="file"
                name="file"
                type="file"
                accept={formData.type === 'video' ? 'video/*' : 'image/*'}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {urlError && (
            <p className="text-red-500 text-sm mt-1">{urlError}</p>
          )}
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Add'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default GalleryManagement; 