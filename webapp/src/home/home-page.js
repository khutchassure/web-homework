import React from 'react'
import { TransactionTable } from './transactions/transaction-table'
// import { Link } from 'react-router-dom'

export function Home () {
  return (
    <div>
      <h1>Transactions</h1>
      <div>
        <div>
          <h2>Add Transaction</h2>
        </div>
        <div>
          <h2>View Transactions</h2>
          <TransactionTable />
        </div>
      </div>
    </div>
  )
}
