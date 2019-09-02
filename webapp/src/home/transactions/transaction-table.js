import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export function TransactionTable () {
  const { loading, error, data } = useQuery(gql`{
      transactions {
        amount
      }
    }`)
  if (loading) return <p>Loading...</p>
  if (error) {
    console.log('error -->', error)
    return <p>Error...</p>
  }
  if (data) {
    console.log('data', data)
    return <p>Data...</p>
  }
}
//   <table>
//     <thead>
//       <tr>
//         <th>Id</th>
//         <th>User</th>
//         <th>Amount</th>
//         <th>Credit</th>
//         <th>Debit</th>
//         <th>Description</th>
//         <th>Merchant</th>
//         <th>Date</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Id data</td>
//         <td>Username data</td>
//         <td>Amount Data</td>
//         <td>Credit Data</td>
//         <td>Debit Data</td>
//         <td>Description Data</td>
//         <td>Merchant Data</td>
//         <td>Date Data</td>
//         <td>
//           <button>Edit</button>
//           <button>Delete</button>
//         </td>
//       </tr>
//     </tbody>
//   </table>
export default TransactionTable
