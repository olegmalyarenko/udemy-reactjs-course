import React from 'react';
import "./style.css";
const MainHeader = () => {
 return(<header>
        <div class="title-block">
        <i class="fa fa-pencil btn-sm title-icon" aria-hidden="true" />
        <h3 class="title">Todo List</h3>
        </div>
        <ul class="navigation">
            <li class="navigation-item"><a>Main page</a></li>
            <li class="navigation-item"><a>About Us</a></li>
        </ul>
    </header>)
};

export default MainHeader;