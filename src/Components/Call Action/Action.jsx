import React from 'react'
import Title from '../Title/Title'
import './Action.css'

const Action = () => {
    return (
        <div className='call-action-sec'>
            <Title title={'Action-Buttons'} subtitle={'Call To Action Buttons'} />
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet beatae laborum repellat eveniet cum excepturi dicta alias iure dignissimos assumenda, officiis mollitia reprehenderit quis perferendis nobis esse, ducimus at placeat nulla exercitationem temporibus rem quam saepe? Numquam, explicabo atque.</p>
                <div className='buttons'>
                    <button className='call-btn'>
                        Contact Now!
                    </button>
                    <button className='call-btn'>
                        Call Now!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Action