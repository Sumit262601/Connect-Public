import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';
import Modal from './Modal';
import toast, { Toaster } from 'react-hot-toast';
import RingLoader from "react-spinners/RingLoader";
import { BLOGS_API } from '../../constant/constant';
import PageNotFound from '../pages/PageNotFound';

const EditForm = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  // Fetch blogs data from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BLOGS_API}/fetchblogs`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        <PageNotFound />
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex gap-2 items-center justify-center text-xl">
        Loading Please wait
        <RingLoader />
      </div>
    );
  }

  // Error state
  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  // Function to handle delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BLOGS_API}/delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the blog.');
      }

      toast.success("Deleted Successfully!");
      // Update the state only if the deletion was successful
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (err) {
      toast.error(`Error deleting blog: ${err.message}`);
      setError(err.message);
    }
  };

  // Function to handle save in modal with image update
  const handleSave = async (id, updatedBlog, imageFile) => {
    try {
      const formData = new FormData();
      formData.append('title', updatedBlog.title);
      formData.append('description', updatedBlog.description);
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await fetch(`${BLOGS_API}/update/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update the blog.');
      }

      const updatedBlogData = await response.json();
      toast.success("Update Finished!");
      setBlogs(blogs.map((blog) => (blog._id === id ? updatedBlogData : blog)));
    } catch (err) {
      toast.error("Blog not updated!");
      console.error(err.message);
    }
  };


  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="border-b border-gray-900/10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Uploaded Content</h2>
      </div>
      <BlogList
        blogs={blogs}
        onEdit={(blog) => {
          setCurrentBlog(blog);
          setModalOpen(true);
        }}
        onDelete={handleDelete}
      />
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          blog={currentBlog}
        />
      )}
    </>
  );
};

export default EditForm;
