import useQuiosco from "../hooks/useQuiosco";

export default function ModalProducto() {
    const { producto, handleClickModal } = useQuiosco();

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img src={`/img/${producto.imagen}.jpg`} alt={`Imagen producto ${producto.nombre}`} />
            </div>

            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button
                        onClick={handleClickModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}