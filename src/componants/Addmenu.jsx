import React, { useState } from 'react';
import { useMenu } from '../context/Menucontext';
import axios from '../axios/axios';

function AddMenuModal({ onClose }) {
  const { setShowAddMenu, setShowAddItem, setSelectedMenuId } = useMenu();

  const [menu, setMenu] = useState({ name: '', Description: '' });

  const handleChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/menu', menu);
      const menuId = res.data._id;

      setSelectedMenuId(menuId); 
      console.log("iddd",menuId)
      setShowAddMenu(false); 
      setShowAddItem(true); 
    } catch (err) {
      console.error('Error creating menu:', err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Menu</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={menu.name}
            onChange={handleChange}
            placeholder="Menu Name"
            className="w-full mb-4 px-4 py-2 border rounded-md"
          />
          <textarea
            name="Description"
            value={menu.Description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full mb-4 px-4 py-2 border rounded-md"
          />

          <div className="flex justify-end gap-2">
            <button onClick={onClose} type="button" className="bg-gray-300 px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Add Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMenuModal;
