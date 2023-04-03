import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialData = [
  {
    id: 1,
    text: "Take out the trash",
    status: "Backlog" 
  },
  {
    id: 2,
    text: "Go grocery shopping",
    status: "To Do"
  },
  {
    id: 3,
    text: "Display tasks by their status",
    status: "In Process"
  },
  {
    id: 4,
    text: "Complete the project update for CS181",
    status: "Review"
  },
  {
    id: 5,
    text: "Read BGP partial deployment paper",
    status: "Done"
  },
]
const statusList = ["Backlog", "To Do", "In Process", "Review", "Done"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App initialData={initialData} statusList={statusList}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
