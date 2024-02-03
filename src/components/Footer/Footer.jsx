import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import styles from "../Footer/footer.module.scss"



export default function Footer() {
    return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#fa8ebb', marginTop:'5%' }}>
        <MDBContainer className='p-4 pb-0'>
            <section className=''>
            <p className='d-flex justify-content-center align-items-center'>
                <span className='me-3'>Register for free</span>
                <button className={styles.button} type="submit"> Sign up! </button>
            </p>
            </section>
        </MDBContainer>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright: 
            <a className='text-white' href='#'>
            Brainstorm it
            </a>
        </div>
    </MDBFooter>
);
}
