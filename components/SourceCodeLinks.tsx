import React from 'react'

interface sourceCodeLinks { 
    sourceCodeLinks: {frontend: string | null; 
    backend: string | null }
};  

const SourceCodeLinks = ({ sourceCodeLinks }: sourceCodeLinks) => {

    let { frontend, backend } = sourceCodeLinks;

    return (
        <div className="source__links">
            {
                frontend !== null && <a target="_blank" rel="noreferrer" href={frontend}>Frontend</a>
            }
            {
                backend !== null && <a target="_blank" rel="noreferrer" href={backend}>Backend</a>
            }
        </div>
    )
}

export default SourceCodeLinks
