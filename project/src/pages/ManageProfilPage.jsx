import React, { Profiler } from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import Profil from '../components/Profil/Profil';


function ManageProfilPage() {

    return (
        <LayoutGlobal children={
            <>
                <Profil />
            </>
        }></LayoutGlobal>
    )
}
export default ManageProfilPage;

