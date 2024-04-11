import React from 'react';

interface InputProps {
    id: string;
    type: string;
    name: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ id, type, name, placeholder }) => {
    return (
        <div className="w-full sm:min-w-[300px]">
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className="border rounded-md w-full py-[10px] px-4 text-[#916834] leading-tight focus:outline focus:border-[#916834]"
            />
        </div>
    );
};

const Form = () => {
    return (
        <form className="flex flex-col justify-center bg-white bg-opacity-90 w-full sm:max-w-min rounded-lg px-[20px] sm:px-[50px] py-[30px] gap-[20px] sm:gap-[25px]">
            {/* Campos */}
            <div className='flex flex-col sm:flex-row gap-[20px] sm:gap-[25px]'>
                {/* Left Column */}
                <div className="flex flex-col gap-[20px] sm:gap-[25px]">
                    <Input id="nombreCompania" placeholder="Nombre de la Compañía" type="text" name="nombreCompania" />
                    <Input id="nombreApellido" placeholder="Nombre y Apellido" type="text" name="nombreApellido" />
                    <Input id="email" placeholder="Email" type="email" name="email" />
                    <Input id="telefono" placeholder="Número de Teléfono" type="tel" name="telefono" />
                    <Input id="pais" placeholder="País" type="text" name="pais" />
                </div>
                {/* Right Column */}
                <div className='flex flex-col gap-[20px] sm:gap-[25px]'>
                    <Input id="provincia" placeholder="Provincia" type="text" name="provincia" />
                    <Input id="direccion" placeholder="Dirección" type="text" name="direccion" />
                    <Input id="codigoPostal" placeholder="Código Postal" type="text" name="codigoPostal" />
                    <Input id="tipoServicio" placeholder="¿Qué tipo de servicio necesita?" type="text" name="tipoServicio" />
                    <Input id="enteraste" placeholder="¿Cómo te enteraste de nosotros?" type="text" name="enteraste" />
                </div>
            </div>
            {/* Message Textarea */}
            <div className="w-full">
                <textarea id="mensaje" placeholder='Dejános tu mensaje' name="mensaje" rows={4} className="border rounded w-full py-[10px] px-4 text-[#916834] leading-tight focus:outline focus:border-[#916834]">
                </textarea>
            </div>
            {/* Submit Button */}
            <div className="w-full">
                <button type="submit" className="bg-[#FFC701] text-white w-full sm:w-auto text-[16px] font-bold px-7 py-3 rounded hover:bg-[#ffb701] uppercase">
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default Form;
