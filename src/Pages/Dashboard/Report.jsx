// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Report = () => {
    const {data: feedback = [], refetch} = useQuery({
        queryKey: ['feedback'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/feedback');
            return res.data;
        }
    })
   
    return (
        <div>
        <h2 className="text-center mb-6 text-4xl text-[#635a71] font-bold uppercase">
         Feedback & Report
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full sm:w-auto">
            {/* head */}
            <thead className="text-xl sm:text-base">
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Feedback & Report</th>
                
              </tr>
            </thead>
  
            <tbody>
              {feedback.map((fdb, index) => (
                <tr key={fdb._id}>
                  <th className="whitespace-nowrap">{index + 1}</th>
                  <td className="whitespace-nowrap">{fdb.user_name}</td>
                  <td className="whitespace-nowrap">{fdb.user_email}</td>
                  <td className="whitespace-nowrap">{fdb.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Report;