import React from 'react'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import Gallery from '../../components/Gallery'
import P from '../../components/Paragraph'
import PostSectionTitle from '../../components/PostSectionTitle'

import barElChino from './bar-el-chino.jpg'
import barElChino2 from './bar-el-chino-2.jpg'
import homeroManzi from './esquina-homero-manzi.jpg'
import homeroManzi2 from './esquina-homero-manzi-2.jpg'
import homeroManzi3 from './esquina-homero-manzi-3.jpg'
import puenteAlsina from './puente-alsina.jpg'
import puenteAlsina2 from './puente-alsina-2.jfif'
import puenteAlsina3 from './puente-alsina-3.webp'
import bernasconi from './bernasconi.jpg'
import bernasconiPatio from './bernasconi-patio.jpg'
import bernasconiTeatro from './bernasconi-teatro.jpg'
import bernasconiBiblioteca from './bernasconi-biblioteca.jfif'
import bernasconiMuseo from './bernasconi-museo.jpg'
import bernasconiPileta from './bernasconi-pileta.jpg'
import fotosLuz from './fotos-luz.jpg'
import lagoGutierrez from './lago-gutierrez.jpg'
import luzCerroTronador from './luz-cerro-tronador.jpg'
import BiancaYPeluso from './bianca-y-peluso.jpg'
import peje from './peje.jpg'
import bici from './bici.jpg'
import casamiento from './casamiento.jpg'
import ogasBrothers from './ogas_brothers.jpg'

const AboutMe = _props => (
  <div>
    <P>
      I&apos;m a young adult, currently living in Buenos Aires city, capital of Argentina.
    </P>

    <P>
      I&apos;ve started building this site as a place to promote my coding skills, but I enjoy a wide range of activities aside from programming.
      Anyway, even if you are here to see if I am a good fit for your development team, it does not hurt to learn a little bit about my life and where I come from.
    </P>

    <P>
      Here it goes.
    </P>

    <PostSectionTitle>The humble origins</PostSectionTitle>

    <P>
      I spent most of my childhood around the neighbourhoods of <em>Pompeya</em> and <em>Parque Patricios</em>, on the south edge of the city of Buenos Aires.
      These are rather typical places where the history of tango, fútbol and murga can be seen and breathed.
    </P>

    <P>
      Take a look at <em>Bar El Chino</em>, when it still served to customers:

      <Gallery images={[barElChino, barElChino2]} />

      <em>Esquina Homero Manzi</em>:

      <Gallery images={[homeroManzi, homeroManzi2, homeroManzi3]} />

      <em>Puente Alsina</em>:

      <Gallery images={[puenteAlsina, puenteAlsina2, puenteAlsina3]} />

      And another monument, the place where I went to elementary school and where I also learned music during the afternoons. <em>Instituto Félix Fernando Bernasconi</em>, also called &quot;la escuela palacio&quot; (&quot;the palace school&quot;):

      <Gallery images={[bernasconi, bernasconiPatio, bernasconiTeatro, bernasconiBiblioteca, bernasconiMuseo, bernasconiPileta]} />

       &quot;Palace&quot; is not an exaggeration. This school features monumental architecture with classic influence and occupies over 2 regular blocks.
       It has a theatre, multiple museums, two big patios, climate-controlled swimming pools, dining rooms, a library. And I am probably missing something.
    </P>

    <P>
      Maybe the most interesting fact about this school resides in its origins. <em>Félix Fernando Bernasconi</em> was a rich swiss immigrant who donated all his wealth for the construction of this &quot;palace school&quot;, in order to attract as many students as possible.
      To make sure that his goal was fulfilled completely, nine months before his death he clarified in his will that the palace school should be built on the land occupied by the fifth house of the famous Perito Moreno, Facundo Pascasio Moreno.
      Why there? Because it was surrounded by a modest neighbourhood of industrial appearance.
    </P>

    <P>
      Did I mention this is a state school? Yes, any Buenos Aires resident can go to this school for free, given there is a vacancy of course.
      This was always an inspiring fact to me, that Mr Bernasconi envisioned for the humblest kids to have the best future his fortune could afford.
    </P>

    <P>
      Now that I think about it, I have a lot to thank for to Mr Bernasconi and my parents who brought me to his school.
      Spending over 10 years here contributed a big deal to nurturing my curiosity about the world.
    </P>

    <P>
      Sadly, a lot of the places I mentioned are not conserved in good shape.
      Maybe, if more tourists knew it&apos;s history and came to see them, the government would care a little bit more about keeping them in shape.
    </P>

    <P>
      I also had the privilege of visiting beautiful places in my countries, like Córdoba, San Luis and Neuquén.
      And my family and I would regularly spend summers in &quot;Las Toninas&quot;, a little town on the Atlantic coast of Buenos Aires province, where my grandfather had a house.
    </P>

    <PostSectionTitle>The teen years</PostSectionTitle>

    <P>
      High school was not a memorable part of my life. To start with, I went to a private school where I suffered some bullying, especially during the first years.
      Reasons? I was a little too introverted and some kids there thought they were superior to me. I didn&apos;Mt like futbol a lot and played it worse.
      Also, I have big ears which won me the &quot;Dumbo&quot; and &quot;Topo Gigio&quot; nicknames.
    </P>

    <P>
      Additionally, I was educated as a Jehova&apos;s Witness, where you are taught to be passive and run away from conflict.
      It is a good thing to avoid getting into a fistfight, but in this world, you also need to defend yourself, and not only from physical abuse.
      JWs also have this doctrine which teaches and forces them not to have any close contact with people that are not JWs.
      They do not celebrate birthdays, Christmas, new year or any kind of popular or patriotic event.
    </P>

    <P>
      Even if I wanted to, I was not allowed to go to birthdays, or to play at patriotic days like &quot;Independence Day&quot; or such.
      I was not allowed to go to the cyber cafe to play some CounterStrike with the boys, because it was a &quot;violent video game&quot;.
      I was not allowed to see &quot;Pokemón&quot; or &quot;Yu-Gi-Oh!&quot; because pokemons <em>evolve</em> (evolution is bad!) and the latter involves some kind of <em>magic</em>.
    </P>

    <P>
      I was basically not allowed to have any close contact with &quot;mundane&quot; people (that&apos;s how they call people that are not JWs). Most of my childhood I spent going from school to home.
      Each week I&apos;Md regularly spent some hours in weekly JW meetings, and studying the Bible as preparation for them. We had meetings at the weekends and we would also go preaching.
      I was forced to spend around 8 weekly hours in these activities. For some time I thought this was normal, but that wouldn&apos;Mt last forever.
    </P>

    <P>
      I think that anyone can agree that <em>my education did not help me become a social person</em>.
      In search of gaining acceptance among JWs, I took the bad decision to baptize. This would later mean being expelled.
    </P>

    <P>
      The paradoxical thing about my education is that my father also taught me a lot about science and philosophy.
      We would have very deep conversations about the nature of existence, the universe and stuff.
      I also learned philosophy and anthropology in high school. I read Kant, Freud, John Paul Sartre, Descartes, Aristoteles and more.
      With time I built my own understanding about life and had my own ideas.
    </P>

    <P>
      Having your own ideas is not good for a JWs. They have &quot;the truth&quot; (they call it that way) set in stone, and there is no room for discussion or wandering among them.
      If I brought any kind of philosophical topics in conversation with my -back then- JWs friends, they would try to quickly dismiss the conversation in fear and panic.
      I began to distantiate from them and vice-versa for this reason.
    </P>

    <P>
      Finally, at some point, I got enough. I wanted to see and judge the world myself. I wanted to be able to go party with some friends.
      Heck, I wanted a girlfriend, god forsake me! Sadly, all these years of social neglecting translated into repressed resentment towards religion and my parents.
      The rebellion phase of my life had started.
    </P>

    <P>
      I began going to wherever I wanted to. Hanged out with whoever I wanted to. Hard rock and progressive rock become a stapple of my late teens.
      My musical tastes -also paradoxically influenced by my christian father-, included Led Zeppelin, Pink Floyd, Yes and more.
      I tried to have my own rock band.
    </P>

    <P>
      Then I took the bad decision to accept cigarettes from a friend at a party. I would smoke a whole pack a day for the following 2 years.
      I was not in good shape. My sleeping schedule was all over the place and I lost a lot of weight.
      That also got me expelled from JWs, because you are not allowed to use substances like tobacco or cannabis.
      Don&apos;Mt worry, I regained all that weight and a little more, just to be on the safe side :D.
    </P>

    <P>
      It was not like I cared to be part of that organization anymore, but JWs are taught no to have contact with expelled or &quot;ex&quot; JWs.
      Most of them don&apos;Mt greet you anymore, even if they are in your house or see you in the street.
      They fear you, like you where some kind of dark influence that could bring disgrace to their lives.
      And they see you as a failure, a lost sheep. They can&apos;Mt understand that you can not believe the same as them, and that&apos;s fine.
      I lost close contact with all my JWs friends and family, except for my brother who walked a similar path.
    </P>

    <PostSectionTitle>Adult life, recent history</PostSectionTitle>

    <P>
      Years and maturity help me filter the good from the bad. Some of the values I learned as a JW stayed with me: honesty, altruism, respect.
      Fundamentalism was never my way. I ditched it for tolerance and strived to keep my mind open.
    </P>

    <P>
      I got introduced to programming in high school, with Visual Basic and HTML/CSS/Javascript.
      For the next two years after high school, I learned Ruby, Ruby on Rails, Javascript and Linux.
      On my own and with a lot of help from my older brother.
    </P>

    <P>
      I finally got my first pay as a Ruby trainee. I spent it on my first smartphone and a Led Zeppelin tattoo.
      I would work non-stop until now, jumping from job to job, learning and advancing my skills on the process.
    </P>

    <P>
      A couple of years later I met Luz. We recently got a modest marriage in Buenos Aires in February of 2019 and we still live in Buenos Aires.
      My little family includes two cats, Bianca and Peluso. Together we visited a lot of places in Argentina so far.
    </P>

    <Gallery images={[fotosLuz, lagoGutierrez, luzCerroTronador, BiancaYPeluso]} />

    <P>
      Work didn&apos;Mt leave me a lot of free time, but over the years I gained a few hobbies.
      You may think that I am a &quot;down to earth&quot; kind of guy. You may be right.
      With time I begin to enjoy more and more things that are closer to natural, simple life than the modern life we live in the city.
      I also enjoy cyclotouring, trekking, and recently got into fishing.
    </P>

    <Gallery images={[peje, bici, casamiento, ogasBrothers]} />

    <P>
      So that&apos;s <em>a little bit</em> about me. Hope I haven&apos;t bored you. Bye!
    </P>
  </div>
)

export default AboutMe
