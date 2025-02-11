import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
            <p className="text-xl mt-4">Terjadi kesalahan yang tidak terduga.</p>
            {error?.statusText || error?.message ? (
                <p className="text-gray-500 mt-2">{error.statusText || error.message}</p>
            ) : null}
        </div>
    );
}

export default ErrorPage;
