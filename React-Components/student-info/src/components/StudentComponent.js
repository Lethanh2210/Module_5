import students from '../data'
import {useState} from 'react'

function StudentComponent(){
    let [data, setData] = useState(students ?? [])

    let studentList =  data.map((item,index)=>(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
            <td><label className="btn btn-primary">modify</label></td>
        </tr>
    ))

    return (
        <div>
            <div className="user-list">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                User manager
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Address</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {studentList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentComponent;