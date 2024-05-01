function Page() {
    return ( 
        <div className="font-Open">
            <h1 className="text-2xl font-medium font">Wilaya</h1>
            <div className="p-4">
                <table className="table-auto text-left">
                    <thead>
                        <tr>
                            <th className="w-[10%]">Wilaya</th>
                            <th className="w-[10%]">Nassama</th>
                            <th className="w-[20%]">Number of places</th>
                            <th className="w-[20%]">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alger</td>
                            <td>949,751</td>
                            <td>100</td>
                            <td>Alger@alger.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Page;