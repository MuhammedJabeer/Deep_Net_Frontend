import React, { useState } from 'react';
import axios from '../axios/axios';
import { useMenu} from '../context/Menucontext';

function AddItemModal({ onClose }) {
  const { selectedMenuId } = useMenu();
  console.log("👉 selectedMenuId from context:", selectedMenuId);
  const [item, setItem] = useState({
    ItemName: '',
    Description: '',
    Price: ''
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/${selectedMenuId}/items`, item);
      console.log('Item added successfully');
      onClose();
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="ItemName"
            value={item.ItemName}
            onChange={handleChange}
            placeholder="Item Name"
            className="w-full mb-4 px-4 py-2 border rounded-md"
          />
          <textarea
            name="Description"
            value={item.Description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full mb-4 px-4 py-2 border rounded-md"
          />
          <input
            name="Price"
            type="number"
            value={item.Price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full mb-4 px-4 py-2 border rounded-md"
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemModal;
