import Navbar from "./Shared/Navbar";

const Team = () => {
    return (
        <div>
            <Navbar></Navbar>
            <p className="text-4xl text-lavender text center">Our Team</p>
<div className="grid grid-col-1 md:grid-cols-3 gap-6">
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="h-96">                    
    <img src="https://i.ibb.co/XydttCX/2-1.png" alt="" />
</figure>
  <div className="card-body">
    <h2 className="card-title">Sumaiya Sinja</h2>
    <p>CEO and founder</p>

  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="h-96">                   
  <img src="https://i.ibb.co/QnF7Lv6/370162076-1353948895532758-114744159248260084-n.jpg" alt="" />
</figure>
  <div className="card-body">
    <h2 className="card-title">Mr. X</h2>
    <p>Founder & Team manager</p>


  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="h-96">                   
  <img src="https://i.ibb.co/dQF58hy/384862078-3596194700650498-1752904254446908345-n.jpg" alt="" />
</figure>
  <div className="card-body">
    <h2 className="card-title">Ms. Ana</h2>
    <p>Chef</p>
  </div>
</div>


</div>
        </div>
    );
};

export default Team;