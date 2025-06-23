import { useState } from 'react';
import Layout from '../../components/Layout';

const CareerApplication = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    qualification: '',
    experience: '',
    degree: '',
    location: '',
    resume: null
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10,}$/.test(form.mobile.replace(/\D/g, ''))) newErrors.mobile = 'Invalid mobile number';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.qualification.trim()) newErrors.qualification = 'Qualification is required';
    if (!form.experience.trim()) newErrors.experience = 'Experience is required';
    if (!form.degree.trim()) newErrors.degree = 'Degree is required';
    if (!form.location.trim()) newErrors.location = 'Location is required';
    if (!form.resume) newErrors.resume = 'Resume is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setUploadError('Only PDF files are allowed');
        setForm({ ...form, resume: null });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setUploadError('File size must be less than 2MB');
        setForm({ ...form, resume: null });
        return;
      }
      setUploadError('');
      setForm({ ...form, resume: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0 && !uploadError) {
      setLoading(true);
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === 'resume') {
          if (value) formData.append('resume', value);
        } else {
          formData.append(key, value);
        }
      });
      try {
        // Replace the URL below with your backend endpoint
        const response = await fetch('https://cbss-backend.onrender.com/api/career/apply', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          setSuccess(true);
          setForm({ name: '', mobile: '', email: '', qualification: '', experience: '', degree: '', location: '', resume: null });
          setSubmitted(false);
        } else {
          setSuccess(false);
        }
      } catch (err) {
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Job Application Form</h1>
        {success && <div className="mb-4 text-green-600 font-semibold">Application submitted successfully!</div>}
        <form className="space-y-6" onSubmit={handleSubmit} noValidate encType="multipart/form-data">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
              placeholder=""
            />
            {submitted && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
              placeholder=""
            />
            {submitted && errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
              placeholder=""
            />
            {submitted && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.qualification ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
              placeholder=""
            />
            {submitted && errors.qualification && <p className="text-red-500 text-xs mt-1">{errors.qualification}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
            <input
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.experience ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
              placeholder=""
            />
            {submitted && errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
            <input
              type="text"
              name="degree"
              value={form.degree}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.degree ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
              placeholder=""
            />
            {submitted && errors.degree && <p className="text-red-500 text-xs mt-1">{errors.degree}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
              placeholder=""
            />
            {submitted && errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Resume (PDF, max 2MB)</label>
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {submitted && errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
            {uploadError && <p className="text-red-500 text-xs mt-1">{uploadError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium hover:shadow-lg"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CareerApplication; 