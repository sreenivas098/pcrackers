import {useNavigate} from "react-router-dom";



const SelctBranch = () => {
    const branchShort = ['cse', 'ece', 'ce', 'mech', 'mme', 'chem'];
  const branches = [
    "Computer Science",
    "Electronics and Communications",
    "Civil",
    "Mechanical",
    "Metallurgical",
    "Chemical",
  ];
  const navigate = useNavigate();
  return (
    <div className="container-fluid" style={{position:'fixed', width:'100%', height:'100%'}}>
      <div className="row">
        <div className="col-6 col-md-6 border">
          <img src="assets/pc2.png" alt="Laptop " width="100%" />
        </div>
        <div className="col-6 col-md-6  bg-secondary">
          <div className="d-flex flex-column  justify-content-center align-items-center">
            <ul className="list-group list-group-flush ">
              {branches.map((branch, index) => (
                <li
                  key={index}
                  className="text-warning  list-group-item bg-secondary"
                >
                  <p className="btn" onClick={() =>navigate(`/branch/${branchShort[index]}`)}>
                    {branch} Engineering
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelctBranch;
