


import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Crud() {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        puntoEncuentro: '',
        categoria: '',
        creador: ''
    });

    const [paquetes, setPaquetes] = useState([
        {
            nombre: 'Paquete A',
            descripcion: 'Descripción del Paquete A',
            precio: '50',
            puntoEncuentro: 'Lugar A',
            categoria: 'Categoría A',
            creador: 'Creador A'
        },
        {
            nombre: 'Paquete B',
            descripcion: 'Descripción del Paquete B',
            precio: '80',
            puntoEncuentro: 'Lugar B',
            categoria: 'Categoría B',
            creador: 'Creador B'
        },
        {
            nombre: 'Paquete B',
            descripcion: 'Descripción del Paquete B',
            precio: '80',
            puntoEncuentro: 'Lugar B',
            categoria: 'Categoría B',
            creador: 'Creador B'
        },
        {
            nombre: 'Paquete B',
            descripcion: 'Descripción del Paquete B',
            precio: '80',
            puntoEncuentro: 'Lugar B',
            categoria: 'Categoría B',
            creador: 'Creador B'
        },
        {
            nombre: 'Paquete B',
            descripcion: 'Descripción del Paquete B',
            precio: '80',
            puntoEncuentro: 'Lugar B',
            categoria: 'Categoría B',
            creador: 'Creador B'
        },
        {
            nombre: 'Paquete B',
            descripcion: 'Descripción del Paquete B',
            precio: '80',
            puntoEncuentro: 'Lugar B',
            categoria: 'Categoría B',
            creador: 'Creador B'
        }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Agregar el nuevo paquete a la lista
        setPaquetes([...paquetes, formData]);
        // Limpiar el formulario después de enviar
        setFormData({
            nombre: '',
            descripcion: '',
            precio: '',
            puntoEncuentro: '',
            categoria: '',
            creador: ''
        });
    };

    const handleDelete = (index) => {
        // Eliminar un paquete de la lista por su índice
        const updatedPaquetes = paquetes.filter((_, i) => i !== index);
        setPaquetes(updatedPaquetes);
    };

    const handleUpdate = (index) => {
        // Actualizar un paquete (aquí puedes implementar la lógica para actualizar)
        // En este ejemplo, simplemente mostraremos los datos del paquete en la consola
        console.log('Paquete actualizado:', paquetes[index]);
    };

    return (
        <div>
            <Header item1="Volver" ref1="/" />
            <div className="flex">
                {/* Sección de la lista de paquetes */}
                <div className="w-1/2 p-4 overflow-y-auto max-h-screen mt-8">
                    <h2 className="text-lg font-semibold mb-4">Lista de Paquetes</h2>
                    <ul>
                        {paquetes.map((paquete, index) => (
                            <li key={index} className="bg-gray-100 rounded-md p-4 mb-4">
                                <div>
                                    <div>
                                        <span className="font-semibold">Nombre: </span>
                                        <span>{paquete.nombre}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Precio: </span>
                                        <span>{paquete.precio}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Punto de Encuentro: </span>
                                        <span>{paquete.puntoEncuentro}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Categoría: </span>
                                        <span>{paquete.categoria}</span>
                                    </div>
                                </div>
                                {/* Botones para eliminar y actualizar */}
                                <div className="mt-2">
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mr-2"
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        onClick={() => handleUpdate(index)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
                                    >
                                        Actualizar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Sección del formulario */}
                <div className="w-1/2 p-4">
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="nombre">
                                Nombre del Paquete:
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="descripcion">
                                Descripción:
                            </label>
                            <input
                                type="text"
                                name="descripcion"
                                value={formData.descripcion}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="precio">
                                Precio:
                            </label>
                            <input
                                type="text"
                                name="precio"
                                value={formData.precio}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="puntoEncuentro">
                                Punto de Encuentro:
                            </label>
                            <input
                                type="text"
                                name="puntoEncuentro"
                                value={formData.puntoEncuentro}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="categoria">
                                Categoría:
                            </label>
                            <input
                                type="text"
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="creador">
                                Creador:
                            </label>
                            <input
                                type="text"
                                name="creador"
                                value={formData.creador}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Crud;

