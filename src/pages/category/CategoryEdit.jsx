import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import CategoryCreateFields from "./CategoryCreateFields";
import { showToast } from "../../utils/showToast";

import { clearCategoriesState } from "../../redux/slices/categorySlices/categorySlices";
import { getSingleCategory, updateCategory } from "../../redux/actions/categoryActions/categoryActions";

const CategoryEdit= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    singleCategory,
    singleCategoryLoading,
     getSingleCategoryError,
    isUpdateCategory,
  } = useSelector((state) => state.category);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
    clearErrors,
    watch,
  } = useForm();

  const watchIsActive = watch("isActive", true);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (id) {
      dispatch(getSingleCategory(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (singleCategory) {
      setValue("name", singleCategory.name);
      setValue("description", singleCategory.description);
      setValue("label", singleCategory.labal);
      setValue("isActive", singleCategory.isActive);
      setImagePreview(singleCategory.image); // Assuming URL from backend
    }
  }, [singleCategory, setValue]);

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
    fileInputRef.current.click();
  };

  const submitForm = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("label", data.label);
    formData.append("isActive", data.isActive ? "true" : "false");

    if (imageFile) {
      formData.append("image", imageFile);
    }

    dispatch(updateCategory(id, formData));
  };

  useEffect(() => {
    if (getSingleCategoryError) {
      showToast(`${getSingleCategoryError}`, "error", "edit-category-error");
      dispatch(clearCategoriesState());
    }

    if (isUpdateCategory) {
      showToast(`${isUpdateCategory}`, "success", "edit-category-success");
      dispatch(clearCategoriesState());
      navigate("/admin/categories"); // Change as per your routing
    }
  }, [getSingleCategoryError, isUpdateCategory, dispatch, navigate]);

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-5 dark:bg-gray-900 my-5"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
        Edit Category
      </h2>

      <CategoryCreateFields
        register={register}
        errors={errors}
        imagePreview={imagePreview}
        fileInputRef={fileInputRef}
        handleImageClick={handleImageClick}
        handleImageDrop={handleImageDrop}
        handleFileChange={handleFileChange}
        watchIsActive={watchIsActive}
        categoryLoading={singleCategoryLoading}
      />
    </form>
  );
};

export default CategoryEdit;
