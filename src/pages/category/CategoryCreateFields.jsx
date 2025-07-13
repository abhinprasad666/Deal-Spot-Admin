import React from "react";
import ButtonLoader from "../../components/loaders/ButtonLoader";

const CategoryCreateFields = ({
  register,
  errors,
  imagePreview,
  fileInputRef,
  handleImageClick,
  handleImageDrop,
  handleFileChange,
  watchIsActive,
  categoryLoading,

}) => {
  return (
    <>
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
          <label
            className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-300 ${
              watchIsActive ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={categoryLoading}
        className={`w-full text-white py-2 rounded-md transition flex justify-center items-center 
          ${categoryLoading ? "bg-blue-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {categoryLoading ? (
          <ButtonLoader size={6} color="#fff" message="Creating" />
        ) : (
          "Create Category"
        )}
      </button>
    </>
  );
};

export default CategoryCreateFields;
