import React from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
        <title>CV - Sutha</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

        <nav className={styles.navbar}>
          <div className={styles.navlinks}>
            <div className={styles.title_nav}>
            <p>RADITYA.</p>
            </div>
          <div className={styles.nav_links}>
          <a className={styles.nav_a} href='#'>Home</a>
          <a className={styles.nav_a} href='#about'>About</a>
          <a className={styles.nav_a} href='#Project'>Project</a>
          <a className={styles.nav_a} href='#'>Contact</a>
          </div>
          </div>
        </nav>

        <div className={styles.header}>
          <div className={styles.left_content}>
            <div className={styles.ornamen}>
              <Image
              src="/dott.svg"
              width={500}
              height={500}
              />
            </div>
            <div className={styles.title_box}>
              <div className={styles.title}>
                <p> MY NAME IS <br></br> 
                <span className={styles.title_span}> MADE SUTHA RADITYA </span> </p>
              </div>
              <div className={styles.job}>
                <p> Your Front-End Developer </p>
              </div>
              <div className={styles.header_link}>
              <a href='#about' className={styles.header_a}> More </a>
              <div className={styles.arrow_box}>
              <div className={styles.arrow}>
                <Image
                  src="/arrow.png"
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.arrow}>
                <Image
                  src="/arrow.png"
                  width={20}
                  height={20}
                />
              </div>
              </div>
            </div>
            </div>
          </div>
          <div className={styles.right_content}>
            <div className={styles.top}></div>
            <div className={styles.bott}>
              <div className={styles.header_img}>
              <Image 
                src="/header.png"
                width={1000}
                height={900}
              />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.about}  id="about">
      <div className={styles.container}>
        <div className={styles.left_content}>
          <div className={styles.img_box}>
            <div className={styles.xd}>
              <Image 
                  src="/xd.svg"
                  width={60}
                  height={60}
                />
            </div>
            <div className={styles.ps}>
              <Image 
                  src="/ps.svg"
                  width={60}
                  height={60}
                />
            </div>
            <div className={styles.figma}>
              <Image 
                  src="/figma (1).png"
                  width={35}
                  height={35}
                />
            </div>
            <div className={styles.ai}>
              <Image 
                  src="/ai.svg"
                  width={60}
                  height={60}
                />
            </div>
            <div className={styles.img_content}>
              <Image 
                  src="/fotodiri.jpg"
                  width={400}
                  height={450}
                  className={styles.image}
                />
              <div className={styles.about_ornamen}>
                <Image 
                  src="/about_ornamen.svg"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.wave}>
              <Image 
                src="/wave.svg"
                width={200}
                height={100}
              />
          </div>
          <div className={styles.subtitle}>
            <p>ABOUT ME</p>
            <div className={styles.splash}>
              <Image 
                  src="/splash.svg"
                  width={120}
                  height={25}
                />
            </div>
          </div>
          <div className={styles.title}>
            <p> Hi, Here Is About Me </p>
          </div>
          <div className={styles.description}>
            <p> Hi there - I'm usually called Sutha, I take great pride in my design skills and I am also skilled in front-end development,  with awards recognizing my expertise. I'm a student from Primakara University. </p>
          </div>
          <a href="https://drive.google.com/file/d/1eAom4tnwbtBfrUzmpmx0K_n-ChdyfvbL/view?usp=share_link" target='_blank' rel="noreferrer">
          <div className={styles.btn}>
            <div className={styles.icon}>
              <Image 
                  src="/download.svg"
                  width={30}
                  height={30}
                />
            </div>
            <p> Download CV </p>
          </div>
          </a>
        </div>
      </div>
    </div>

    <div className={styles.resume}>
        <div className={styles.container}>
            <div className={styles.title_2}>
                <p> My Resume </p>
                <div className={styles.ornamen}></div>
            </div>
            <div className={styles.left_content}>
                <div className={styles.education_box}>
                <div className={styles.kotak}>
                   <div className={styles.year}>
                        <p> 2018 - 2021 </p>
                    </div> 
                   <div className={styles.details}>
                        <div className={styles.marker}></div>
                        <div className={styles.description}>
                            <p> SMPN 3 Kediri </p>
                            <p> Beraban, Kec. Kediri, Kabupaten Tabanan </p>
                        </div>
                   </div>
                </div>
                <div className={styles.kotak}>
                   <div className={styles.year}>
                        <p> 2021 - 2023 </p>
                    </div> 
                   <div className={styles.details}>
                        <div className={styles.marker}></div>
                        <div className={styles.description}>
                            <p> SMK TI Bali Global Badung </p>
                            <p> Jl. Tibung Sari No.1X, Dalung, Kec. Kuta Utara, Kabupaten Badung, </p>
                        </div>
                   </div>
                </div>
                <div className={styles.kotak}>
                   <div className={styles.year}>
                        <p> 2024 - Now </p>
                    </div> 
                   <div className={styles.details}>
                        <div className={styles.marker}></div>
                        <div className={styles.description}>
                            <p> Primakara University </p>
                            <p> Jl. Tukad Badung No.135, Renon, Denpasar Selatan, Kota Denpasar </p>
                        </div>
                   </div>
                </div>
                </div>
            </div>
            <div className={styles.right_content}>
                <div className={styles.resume_ornamen}>
                    <Image
                  src="/dotted.svg"
                  width={200}
                  height={200}
                  className={styles.frame3}
                  />
                </div>
                <div className={styles.title_box}>
                    <div className={styles.left}>
                        <p> Education </p>
                        <div className={styles.splash}>
                        <Image 
                            src="/splash.svg"
                            width={110}
                            height={50}
                            className={styles.splash_resume}
                          />
                        </div>
                    </div> 
                    <div className={styles.center}>
                      <Image 
                        src="/garis.svg"
                        width={20}
                        height={180}
                      />
                    </div>
                    <div className={styles.right}>
                        <p> Abilities </p>
                        <div className={styles.ornamen}>
                          <Image 
                            src="/Vector.svg"
                            width={45}
                            height={45}
                          />
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.text_content}>
                        <div className={styles.col}>
                            <div className={styles.details_2}>
                                <p> 1. </p>
                                <p> Team Collaboration </p>
                            </div>
                            <div className={styles.details_2}>
                                <p> 2. </p>
                                <p> Attention to Detail </p>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.details_2}>
                                <p> 3. </p>
                                <p> Time Discipline </p>
                            </div>
                            <div className={styles.details_2}>
                                <p> 4. </p>
                                <p> Adaptability </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.achievement}>
                        <div className={styles.title}>
                            <p> Achievement </p>
                        </div>
                        <div className={styles.desc}>
                            <p> INFINITY 2022 (Contest) - Web Design </p>
                            <p> First Place / Winner </p>
                        </div>
                        <div className={styles.desc}>
                            <p> TechComFest 2024 (Contest) - Web Development </p>
                            <p> Finalist </p>
                        </div>
                        <div className={styles.desc}>
                            <p> FESTIDA 2024 (Contest) - Web Development </p>
                            <p> 5th Place </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className={styles.project} id="Project">
      <div className={styles.title}>
        <p> My Top Projects </p>
        <div className={styles.splash}>
          <Image 
            src="/splash 1.svg"
            width={130}
            height={100}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.ornamen}>
          <Image 
            src="/dotted.svg"
            width={300}
            height={200}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.box}>
              <div className={styles.img}>
                <Image 
                  src="/mockup1.png"
                  width={300}
                  height={250}
                />
              </div>
              <div className={styles.content_box}>
                <p> Planet Edukasi </p>
                <p> This website was created to participate in the <b>INVENTION 2022</b>, web competition held by <b>Udayana University</b>, and made by Bocah TI Team.</p>
                <a href="https://planetedukasi.netlify.app/" target='_blank' rel="noreferrer">
                <button className={styles.cta}>
                  <span>Visit</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>             
              </a>
             </div>
            </div>
            <div className={styles.box}>
              <div className={styles.img}>
                <Image 
                  src="/mockup2.png"
                  width={300}
                  height={250}
                />
              </div>
              <div className={styles.content_box}>
                <p> Medicare </p>
                <p> This website was created to participate in the <b>INFINITY 2022</b>, an individual web competition held by <b>ITB STIKOM Bali University.</b> </p>
                <a href="https://medicare-2.netlify.app/" target='_blank' rel="noreferrer">
                <button className={styles.cta}>
                  <span>Visit</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>             
              </a>
              </div>
            </div>
          </div>
          <div className={styles.row}>
          <div className={styles.box}>
              <div className={styles.img}>
              <Image 
                  src="/mockup3.png"
                  width={300}
                  height={250}
                />
              </div>
              <div className={styles.content_box}>
                <p> Ricoffee </p>
                <p> This website was created for the school project </p>
                <a href="https://ricoffee.netlify.app/" target='_blank' rel="noreferrer">
                <button className={styles.cta}>
                  <span>Visit</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>             
              </a>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.img}>
                <Image 
                  src="/mockup4.png"
                  width={300}
                  height={250}
                />
              </div>
              <div className={styles.content_box}>
                <p> TraveLin </p>
                <p> This website was created for the school project </p>
                <a href="https://travelin-2.netlify.app/" target='_blank' rel="noreferrer">
                <button className={styles.cta}>
                  <span>Visit</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>      
              </a>       
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.contact}>
        <div className={styles.wm}>
                <div className={styles.footer}> Copyright 
                <div className={styles.icon_2}>  
                <Image 
                    src="/copyright-symbol.png"
                    width={15}
                    height={15}
                  />
                </div>2023 Raditya. All Right Reserved. </div>
                <p> Build with <a href="https://nextjs.org/" className={styles.links}>Next.js</a> </p>
        </div>
        <div className={styles.top}>
            <div className={styles.title_box}>
                <p className={styles.title}> Get in touch.. </p>
                <p> Contact </p>
            </div>
        </div>
        <div className={styles.center}>
            <div className={styles.kotak}>
                <a href="mailto:radityasutha@gmail.com" className={styles.a}>
                <div className={styles.icon}>
                  <Image 
                    src="/mail.png"
                    width={30}
                    height={40}
                  />
                </div>
                <p> sutha.radityaa@gmail.com </p>
                </a>
            </div>
            <div className={styles.kotak}>
                <a href="https://wa.wizard.id/f3abc8" className={styles.a}> 
                <div className={styles.icon}>
                  <Image 
                    src="/call.png"
                    width={25}
                    height={25}
                  />
                </div>
                <p> +6281936748206 </p>
                </a>
            </div>
            <div className={styles.kotak}>
                <a href="https://goo.gl/maps/UJEvLu5LqhUqdB6s5" className={styles.a}> 
                <div className={styles.icon}>
                  <Image 
                    src="/placeholder.png"
                    width={25}
                    height={25}
                  />
                </div>
                <p> Br Taman Sari, Pandak <br></br> Gede, Kediri, Tabanan </p>
                </a>
            </div>
        </div>
        <div className={styles.bott}>
            <div className={styles.medsos_box}>
                <div className={styles.medsos}>
                  <a href="https://instagram.com/suta.radityaa?igshid=YzgyMTM2MGM=">
                  <Image 
                      src="/facebook (5).png"
                      width={45}
                      height={45}
                    />
                    </a>
                </div>
                <div className={styles.medsos}>
                  <a href="https://instagram.com/suta.radityaa?igshid=YzgyMTM2MGM=">
                    <Image 
                      src="/instagram (8).png"
                      width={45}
                      height={45}
                    />
                    </a>
                </div>
                <div className={styles.medsos}>
                  <a href="https://instagram.com/suta.radityaa?igshid=YzgyMTM2MGM=">
                    <Image 
                      src="/twitter (3).png"
                      width={20}
                      height={20}
                    />
                    </a>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
