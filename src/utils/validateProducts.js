export const validateProducts = (product, fileRequired = true) => {
    const errors = {};
  
    if (!product.nombre.trim()) {
      errors.nombre = "El nombre es obligatorio";
    }
  
    if (!product.precio || product.precio <= 0) {
      errors.precio = "El precio debe ser mayor a cero";
    }

    if (!product.stock || product.stock <= 0) {
      errors.stock = "El stock debe ser mayor a cero";
    }
  
    if (!product.descripcion.trim()) {
      errors.descripcion = "La descripción es obligatoria";
    }
  
    if (!product.categoria.trim()) {
      errors.categoria = "La categoria es obligatoria";
    }
  
    if (fileRequired && !product.file) {
      errors.file = "Debes seleccionar una imagen";
    }
  
    return errors;
  };