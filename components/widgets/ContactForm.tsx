import React from 'react';

interface InputProps {
    id: string;
    label: string;
    type: string;
    name: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ id, label, type, name, placeholder }) => {
    return (
        <div className="min-w-[300px]">
            <label htmlFor={id} className="block text-[#916834] font-normal mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className="border rounded w-full py-2 px-4 text-[#916834] leading-tight focus:outline focus:border-[#916834]"
            />
        </div>
    );
};

const Form = () => {
    return (
        <form className="flex flex-col justify-center bg-white bg-opacity-90 w-min rounded-lg px-[50px] py-[30px] gap-[25px]">
            <div className='flex flex-row gap-[50px]'>
                {/* Left Column */}
                <div className="flex flex-col gap-[25px] ">
                    <Input id="nombreApellido" label="Nombre y Apellido" type="text" name="nombreApellido" />
                    <Input id="direccion" label="Dirección" type="text" name="direccion" />
                    <Input id="pais" label="País" type="text" name="pais" />
                    <Input id="enteraste" label="¿Cómo te enteraste de nosotros?" type="text" name="enteraste" />
                    <Input id="email" label="Email" type="email" name="email" />
                </div>
                {/* Right Column */}
                <div className='flex flex-col gap-[25px]'>
                    <Input id="nombreCompania" label="Nombre de la Compañía" type="text" name="nombreCompania" />
                    <Input id="codigoPostal" label="Código Postal" type="text" name="codigoPostal" />
                    <Input id="provincia" label="Provincia" type="text" name="provincia" />
                    <Input id="telefono" label="Número de Teléfono" type="tel" name="telefono" />
                    <Input id="tipoServicio" label="¿Qué tipo de servicio desea contratar?" type="text" name="tipoServicio" />
                </div>
            </div>
            {/* Message Textarea */}
            <div className="w-full">
                <label htmlFor="mensaje" className="block text-[#916834] font-normal mb-2">
                    Déjanos tu mensaje
                </label>
                <textarea id="mensaje" name="mensaje" rows={4} className="border rounded w-full py-2 px-4 text-[#916834] leading-tight focus:outline focus:border-[#916834]">
                </textarea>
            </div>
            {/* Submit Button */}
            <div className="w-full">
                <button type="submit" className="bg-[#FFC701] text-white text-[16px] font-bold px-7 py-3 rounded hover:bg-[#ffb701] uppercase">
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default Form;
