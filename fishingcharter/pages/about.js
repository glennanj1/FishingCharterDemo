import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import frank from '../public/frankStriperCatch.png'

function About() {  
  return (
    <>
     <section className={styles.topContainer}>
          <Image alt="Frank" src={frank} width={300} height={300}/>
     </section>
      <section className={styles.container}>
          <h1 className={styles.about}>About Us</h1>
          <p>
            30 Line Sportfishing is located in Keyport for spring Striped Bass and Belmar from June on, and offers to show you a memorable time in these waters. Captain Frank offers a wide variety of charter options that range from fishing in the bay to offshore fishing.
          </p>
          <p>
            Capt. Frank will do his best to make sure you have a fun day full of fishing, which involves 5 to 10-hour trips. In the spring, you can target Striped Bass in the Raritan Bay. These trips are action-packed and you’re just about guaranteed to bring home dinner! During the spring and summer months, the captain moves the boat down to Belmar to target Seabass, Fluke, Tuna, Mahi, sharks, Blackfish, and whatever else you would like to fish for. On these trips, you can expect to use techniques such as light tackle, heavy tackle, bottom fishing, trolling, fly fishing, big game fishing, jigging, popping, and spinning.
          </p>
          <p>
            Your fishing adventure starts on a 24’ Grady White boat, an absolute fishing machine! It can safely take up to 6 anglers and comes with a portable toilet and an ice-box. The boat also has a small cabin where you can escape the elements on the ride out.
          </p>
          <p>
            30 Line Sportfishing uses all top-notch gear and tackle to provide you with the ultimate angling experience. Your trip will include all the necessary fishing licenses for the day. Rest assured that the captain and crew are friendly and professional, and have the ability to coach the newest of anglers. Your catch of the day will be filleted and bagged for your convenience.
          </p>
          <p>
            30 Line Sportfishing hopes to see you out on the water!
          </p>
      </section>
    </>
  )
}

export default About