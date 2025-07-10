import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/actions/categoryActions/categoryActions";

const CategoryCreateForm = () => {
      const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      clearErrors("image");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      clearErrors("image");
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click(); // simulate click on file input
  };

  const submitForm = (data) => {
    if (!imageFile) {
      setError("image", { type: "manual", message: "Image is required" });
      return;
       
    }

    const finalData = {
      ...data,
      isActive: !!data.isActive,
      image: imageFile,
     
    };

    console.log("Submitted Data:", finalData);
     dispatch(createCategory(data))

    reset();
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-5"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Create Category</h2>

      {/* Category Name */}
      <div>
        <label className="block font-medium mb-1">Category Name</label>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Minimum 3 characters" },
            maxLength: { value: 50, message: "Maximum 50 characters" },
          })}
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          {...register("description", {
            required: "Description is required",
            maxLength: { value: 500, message: "Max 500 characters" },
          })}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Label */}
      <div>
        <label className="block font-medium mb-1">Label</label>
        <input
          {...register("label", {
            required: "Label is required",
          })}
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.label && (
          <p className="text-red-500 text-sm">{errors.label.message}</p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <label className="block font-medium mb-1">Category Image</label>
        <div
          onClick={handleImageClick}
          onDrop={handleImageDrop}
          onDragOver={(e) => e.preventDefault()}
          className="w-full border-2 border-dashed border-gray-400 rounded-lg p-4 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="mx-auto h-40 object-contain"
            />
          ) : (
            <p className="text-gray-500">Click or drag & drop an image here</p>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      {/* Active Toggle */}
      <div className="flex items-center justify-between">
        <label className="font-medium">Active</label>
        <div className="relative inline-block w-12 mr-2 align-middle select-none">
          <input
            type="checkbox"
            {...register("isActive")}
            defaultChecked
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer top-0 left-0 transition-transform duration-300 ease-in-out checked:translate-x-6"
          />
          <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
      >
        Create Category
      </button>
    </form>
  );
};

export default CategoryCreateForm;
