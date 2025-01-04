interface TableProps <THeader, TData extends object>{
    headers: THeader[]; 
    items: TData[];  
}

export function Table<THeader, TData extends object>({headers, items}: TableProps<THeader, TData>) {

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-6">
                <div className="-my-2 overflow-x-auto w-1/2">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {
                                        headers.map((row, index) => {
                                            return (
                                                <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    {String(row)}
                                                </th>
                                            );
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    items.map((item, index) => {
                                        return (
                                            <tr key={index} className="hover:bg-gray-50">
                                                {
                                                    Object.values(item).map((value) => {
                                                        return (
                                                            <td className="px-6 py-4 whitespace-nowrap">{value}</td>
                                                        )
                                                    })                                          
                                                }
                                                
                                            </tr> 
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}