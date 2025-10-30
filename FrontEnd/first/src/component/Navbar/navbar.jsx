import img from '../../assets/images/logo.png';

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)">
                    <img src={img} alt="Logo" style={{ width: '60px', height: '40px' }} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Search"></input>
                    <button class="btn btn-primary" type="button">Search</button>
                </form>
                </div>
            </div>
            </nav>
    )
}