import React, { useState } from 'react'
import './Toggle.css'
const Toggle = () => {
    const [ta,setTa] = useState(1);
const changeToggle=(id)=>{
  setTa(id)
}
    return (
        <div className='taggle-width'>
            <div className='toggle'><ul>
                <li className={ta === 1 ? 'tg-active' : 'tg-ele'} onClick={()=>{changeToggle(1)}}>HTML</li>
                <li className={ta === 2 ? 'tg-active' : 'tg-ele'} onClick={()=>{changeToggle(2)}}>CSS</li>
                <li className={ta === 3 ? 'tg-active' : 'tg-ele'} onClick={()=>{changeToggle(3)}}>JavaScript</li>
            </ul>
            </div>
            <div className='togge-body'>
                <div className={ta === 1 ? 'set-content' : 'content'}>
                    <h1>HTML</h1>
                    <p>Temporibus doloribus dicta tenetur, iste maiores repellat dolorem sint quae debitis earum? Recusandae assumenda, reiciendis perferendis tenetur vitae numquam libero neque fugiat nesciunt, quos amet nulla quas a voluptatum, ut rerum! Ipsam cum quo eaque. Illum quaerat esse necessitatibus debitis, maxime voluptatem atque illo iusto cupiditate repudiandae voluptatum sunt harum aut. Adipisci expedita qui odit ratione est hic aliquam magni eum quae id!
                    </p>
                </div>
                <div className={ta === 2 ? 'set-content' : 'content'}>
                    <h1>CSS</h1>
                    <p>tenetur vitae numquam libero neque fugiat nesciunt, quos amet nulla quas a voluptatum, ut rerum! Ipsam cum quo eaque. Illum quaerat esse necessitatibus debitis, maxime voluptatem atque illo iusto cupiditate repudiandae voluptatum sunt harum aut. Adipisci expedita qui odit ratione est hic aliquam magni eum quae id!
                    </p>
                </div>
                <div className={ta === 3 ? 'set-content' : 'content'}>
                    <h1>JAVSCRIPT</h1>
                    <p>Temporibus doloribus dicta tenetur, iste maiores repellat dolorem sint quae debitis earum? Recusandae assumenda, reiciendis perferendis tenetur vitae numquam libero neque fugiat nesciunt, quos amet nulla quas a voluptatum, ut rerum! Ipsam cum quo eaque. Illum quaerat esse necessitatibus debitis, maxime voluptatem atque illo iusto cupiditate repudiandae voluptatum sunt harum aut. Adipisci expedita qui odit ratione est hic aliquam magni eum quae id!
                    </p>
                </div>

            </div>
        </div>

    )
}

export default Toggle