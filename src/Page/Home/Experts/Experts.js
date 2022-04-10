import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const Experts = () => {

    const experts = [
        {
            img: mechanic1,
            name: 'Andrew Smith',
            expertize: '~Engine Expert~'
        },
        {
            img: mechanic2,
            name: 'Andrew Smith',
            expertize: '~Engine Expert~'
        },
        {
            img: mechanic3,
            name: 'John Anderson',
            expertize: '~Polish Expert~'
        },
        {
            img: mechanic4,
            name: 'Zakaria Smith',
            expertize: '~Coloring Expert~'
        },
        {
            img: mechanic5,
            name: 'Sakib Anderson',
            expertize: '~Alrounder Expert~'
        }
    ]
    return (
        <div style={{
            marginTop: '80px',
            paddingTop: '50px'
        }} id='experts' className='container'>
            <h1 className='text-primary'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;