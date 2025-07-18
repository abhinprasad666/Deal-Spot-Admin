import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/actions/categoryActions/categoryActions";
import ButtonLoader from "../../components/loaders/ButtonLoader";
import { showToast } from "../../utils/showToast";
import { clearCategoriesState } from "../../redux/slices/categorySlices/categorySlices";
import CategoryCreateFields from "./CategoryCreateFields";

const CategoryCreateForm = () => {
  const dispatch = useDispatch();
  const { categoryError, isUpdateCategory, categoryLoading } = useSelector(
    (state) => state.category
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
    watch,
  } = useForm();

  const watchIsActive = watch("isActive", true);
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
    fileInputRef.current.click();
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

    dispatch(createCategory(finalData));
    reset();
    setImageFile(null);
    setImagePreview(null);
  };

  useEffect(() => {
    if (categoryError) {
      showToast(`${categoryError}`, "error", "add category-error");
      dispatch(clearCategoriesState());
    }

    if (isUpdateCategory) {
      showToast(`${isUpdateCategory}`, "success", "add category-success");
      dispatch(clearCategoriesState());
    }
  }, [categoryError, isUpdateCategory, dispatch]);

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-5 dark:bg-gray-900 my-5"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
        Create Category
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
        categoryLoading={categoryLoading}
        ButtonLoader={ButtonLoader}
      />
    </form>
  );
};

export default CategoryCreateForm;
