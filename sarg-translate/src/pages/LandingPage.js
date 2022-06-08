import React from 'react'
import { T, useSetLanguage, useCurrentLanguage } from '@tolgee/react';


const LandingPage = () => {

    const setLanguage = useSetLanguage();
    const getLanguage = useCurrentLanguage();

    return (
        <div>
            <h1> Multi-language React Application </h1>
            <select
                onChange={(e) => setLanguage(e.target.value)}
                value={getLanguage()}
            >
                <option value="en"> English </option>
                <option value="es-ES"> Spanish </option>
                <option value="fr-FR"> French </option>
            </select>
            <br/><br/>
            <T keyName="main_content">
                This is default value.
            </T>
        </div>       
    )
}

export default LandingPage
