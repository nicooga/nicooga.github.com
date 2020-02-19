import React from 'react'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import A from '../../components/InlineHyperLink'
import P from '../../components/Paragraph'
import PostSectionTitle from '../../components/PostSectionTitle'
import Gallery from '../../components/Gallery'
import Figure from '../../components/Figure'
import CodeSandboxIframe from '../../components/CodeSandboxIframe'

import dice from './dice.jpg'
import bycicle from './bycicle.jpg'
import toyCar from './toy-car.jpg'
import mountain from './mountain.jfif'

import mockup1 from './mockup-1.png'
import mockup2 from './mockup-2.png'

const IMAGES = [dice, bycicle, toyCar, mountain]

const Post = _props => {
  return <Typography variant='body1' component='div'>
    <P>
      Hey there.
    </P>

    <P>
      There's a chance you took a look at About Me section of this site. There I use this component to show images:
    </P>

    <Gallery images={IMAGES} />

    <P>
      This is what I wanted to talk about today.
      Of course, if you needed a component like this, you could go and grab one of the open-source components available at NPM.
      react-photo-gallery looks like a solid choice, to be honest.
    </P>

    <P>
      But let's face it: I love over and reverse engineering stuff.
      Everybody knows that tinkering is the best way to get familiar with tools, and that also applies to software.
      You can buy a ready-to-use solution at the store, or try to build it at home and learn something new while doing it.
    </P>

    <P>
      Even if you are doing serious work for a real company, building from scratch can be a viable option.
      Design teams often hand precise requirements which need to be implemented in pixel-perfect fashion.
    </P>

    <P>
      On this scenario, you have two options: try to use a 3rd party package and tinker with it to look like the way it should, or implement everything from scratch.
      The latter tends to be the right choice more often than you would think.
    </P>

    <P>
      Wrapping up, the point of this post is to be educational, not practical. So let's get hands-on building this thing.
    </P>

    <PostSectionTitle>What are we building</PostSectionTitle>

    <P>
      The gallery we are going to build consists of two main parts: the panner or "film strip" that displays the images, and a fullscreen overlay that allows taking a close look at the images.
    </P>

    <P>
      Features of the panner:
    </P>

    <ul>
      <li>Displays a dynamic amount of images.</li>
      <li>If images overflow horizontally, can be paned by hovering on the sides or dragging. This is why I call it panner</li>
      <li>Can also be panned using touch, friendly for mobile phones.</li>
      <li>When you click on an image, a fullscreen overlay is shown</li>
    </ul>

    <Figure src={mockup1} caption='The panner' />

    <P>
      Features of the fullscreen overlay:
    </P>

    <ul>
      <li>It displays clicked image</li>
      <li>It displays the entire list of images in the gallery, using the same panner component we use for the passive inline gallery.</li>
      <li>
        Allows navigating through all the images in the gallery by multiple input methods:
        <ul>
          <li>by using the two little arrows on the sides</li>
          <li>by swiping to the left or right</li>
          <li>by clicking on the images in the image list</li>
          <li>by using the arrow keys</li>
        </ul>
      </li>
      <li>Can be closed using a little "X" on the corner or by hitting the Escape key</li>
    </ul>

    <Figure src={mockup2} caption='The fullscreen overlay' />

    <P>
      It is worth mentioning that you can have multiple galleries on the same page and they should work correctly.
      There's going to be a single overlay component, shared by all gallery instances.
    </P>

    <PostSectionTitle>The panner</PostSectionTitle>

    <P>
      This component is going to display the images statically, before any user input.
      We need it to have a set height, and it will be pan-able by all the methods mentioned before.
    </P>

    <P>
      A poor man's version of this component would be a simple, scrollable div with a set height.
    </P>

    <CodeSandboxIframe slug='styled-components-d942z' caption="Poor Man's Panner" />

    <P>
      We take advantage of the behavior of <code>{'<img />'}</code>,
      i.e.: that when one of it's dimensions is set (width, or height) the other one adjusts to keep the original aspect ratio of the image.
    </P>

    <P>
      This is somewhat usable, but it looks awful. We need to ditch that scrollbar and begin over-engineering to make it look nice.
      We'll start by making it pan using mouse drag.
    </P>

    <CodeSandboxIframe slug='poor-mans-panner-5guoq' caption='Draggable Panner'/>

    <P>
      Nice, that looks a lot better already. We used a combination of mouse events to control the scrolling. <code>onMouseDown</code>, <code>onMouseUp</code> and <code>onMouseLeave</code> tells us whether the user is current dragging on the container.
      Comparing the "x" coordinate of the <code>onMouseMove</code> event against the last known "x" position gives us the amount of pixels that the user moved the mouse on the last "tick" of this event.
      We can sum this amount to the element's <code>scrollLeft</code> property to achieve the scrolling effect we want.
    </P>

    <P>
      I specified <code>{'onDragStart={ev => ev.preventDefault()}'}</code> for the images to disable the default drag-and-drop behavior.
    </P>

    <P>
      Also note the usage of <code>useRef</code> hook. We could get away with using regular variables because our component is not going to re-render.
      But as soon as we introduce changes that cause a re-render, we are bound to run into problems, as local variables are going to be reset.
      By using a ref we make sure we don't loose our state.
    </P>

    <P>
      So that's it for dragging. We are still missing hover and swipe.
      Keep in mind that our component is soon going to begin bloating because of three different behaviors being present.
      We'll need to deal with that bloat later.
    </P>

    <PostSectionTitle>Adding scroll by hover</PostSectionTitle>

    <P>
      We'll add two little divs on the sides with arrow icons, that will begin scrolling the container into the apropriate direction when hovered.
      I'll call these "pan controls".
    </P>

    <P>
      We'll use absolute positioning to display the pan controls on top of the images.
      There's an unexpected behavior with absolute positioning that we'll need to deal with.
      See how the pan controls are scrolled alongside the images on this failed example.
      I made the pan controls pop-up using an ugly background color:
    </P>

    <CodeSandboxIframe slug='failed-hoverable-panner-pux21' caption='Failed Hoverable Panner' height='400px' view='preview' />

    <P>
      We need our pan controls to not be children of an scrollable div.
      In order to fix this, we'll need to render the scrollable content inside another wrapper element,
      while the pan controls remain being children of the root element.
    </P>

    <CodeSandboxIframe slug='fixed-hoverable-panner-n61p1' caption='Fixed Hoverable Panner' />

    <P>
      Fixed. Now let's add the hover behavior.
      We'll use <code>onMouseEnter</code> and <code>onMouseLeave</code> to start and stop the scrolling in the given direction.
    </P>

    <CodeSandboxIframe slug='hoverable-panner-bh628' caption='Actually Hoverable Panner' />

    <P>
      Good job, we already have scroll on hover. We'll take care of making these pan controls look nice later.
      But right now we have more pushing problems. The component is already bloated.
      We'll try to separate concerns and better encapsulate the code that enables each behavior.
    </P>

    <PostSectionTitle>Separating concerns</PostSectionTitle>

    <P>
      To continue with the trend, we'll create a custom hook for each of our behaviors.
      Let's call them <code>useDragScroll</code> and <code>useHoverScroll</code>.
    </P>

    <P>
      Creating custom hooks is easier that you might think.
      The thing I love about react and the direction they took in the last years, is that everything boils down to using the language features.
      Hooks are just functions. Let's get to it.
    </P>

    <CodeSandboxIframe slug='refactored-hoverable-panner-0djk3' caption='Refactored Draggable Hoverable Panner' module='/Panner/index.jsx' />

    <P>
      Ah, so much better. What an amazing change it can be to move stuff under the carpet.
      But seriously, now that each behavior is separated into a different file, we can easily test them in isolation.
      That's the spirit of good unit testing.
      Also -although here we won't need it- isolation means that we can re-use these hooks wherever it makes sense.
    </P>

    <P>
      If you are familiar with enhancer functions or higher order components, this is not much different.
      Instead of receiving stuff via props, we can simply using the language's elemental features and ditch the "prop passing dance".
      I will probably talk about this typical dance on another post.
    </P>

    <P>
      I even moved the styled components into a separate file. This is a common practice.
      Styled components are behavior poor code that need not to clutter our main component source code.
      Additionally, this way we can easily share the styled components between other auxiliar sub-components.
    </P>

    <P>
      We are almost there. Now that we stablished a pattern to add more behavior to our component without cluttering it, let's keep moving.
    </P>

    <PostSectionTitle>Adding swipe scroll behavior</PostSectionTitle>

    <P>
      Very similarly to how we solved drag, we are going to compare the "x" coordinate of <code>onTouchMove</code> events and add the delta to the film strip's <code>scrollLeft</code> property.
      Once again, let's create a custom hook called <code>useSwipeScroll</code> to encapsulate the needed code.
    </P>

    <CodeSandboxIframe slug='swipeable-hoverable-draggable-panner-xrlkm' caption='Swipeable Draggable Hoverable Panner' module='/Panner/index.jsx' />

    <P>
      Not much to comment, it works!
      Let's make this thing look pretty by using some icons and hiding the hoverable divs when not needed.
      Also, let's make a proper Gallery component that builds on top of the Panner.
      It will accept the whole array of image sources and iterate over them so we don't have to.
    </P>

    <CodeSandboxIframe slug='pretty-panner-mhmyi' caption="Pretty Panner" module='/Gallery.jsx' view='preview' height='400px' />

    <P>
      Perfecto! In my humble opinion, this component already looks and feels amazing.
      I've borrowed icons from Material-UI, then hided the pan controls when not needed by setting it's opacity to zero.
      Also, I've specified some cursors for the final touch.
    </P>

    <P>
      In order for my component to re-render in reaction to changes in <code>scrollLeft</code>, I used the <code>useState</code> hook and <code>onScroll</code> event.
    </P>

    <P>
      Congratulations.
      That was a lot work, but we now have a wonderful <code>Panner</code> component, and it will be double useful later, you'll see.
      Keep it up, we are on the right track!
    </P>

    <PostSectionTitle>The fullscreen gallery</PostSectionTitle>

    <P>
      The whole purpose of this component was to have a zoomed-in view of our images.
      Here comes into play the fullscreen gallery.
    </P>

    <P>
      First things first, we'll need a platform to display our fullscreen gallery at.
      This would be a simple fixed div that shows on top of the entire page.
    </P>

    <P>
      Remember I said we could have multiple galleries on the page and they should work correctly?
      For this we'll need them to share usage of the same fullscreen gallery.
      Inline gallery components across the page should all be able to trigger the full screen gallery to display, passing the image list and current selected image.
      This can be tricky though, as React is very protective of component's state.
      We'll get to the chosen solution soon enough. Spoiler alert: it involves usage of React contenxts.
    </P>

    <P>
      So let's start by creating the component that will represent the full screen gallery.
    </P>

    <CodeSandboxIframe slug='useless-full-screen-overlay-390yf' caption="Useless Full Screen Gallery" module='/FullScreenGallery.jsx' view='preview' />

    <P>
      Here it is. A big dumb fullscreen gallery component.
      I borrowed icons from MaterialUI again and sprinkled some markup to make it work.
      The <code>Panner</code> component we built before became useful again as a means to display the list of images.
    </P>

    <P>
      The rest of the page didn't go away, I just rendered the fullscreen gallery on top of it.
      It does not have any kind of dynamic behavior. It's open by default, can't be closed, and the images are hardcoded.
      We need it to open when an image on a gallery is clicked, passing the clicked image as <code>currentImage</code> and all the images in the clicked gallery as <code>images</code>.
    </P>

    <P>
      Let's get into that global state management.
    </P>

    <PostSectionTitle>Making the FullScreenGallery available to all the Gallery components in the page</PostSectionTitle>

    <P>
      We'll make usage of a common pattern among libraries in React: the context provider.
      This component will provide access to functions that control the FullScreenGallery state to any component in it's descendance.
    </P>

    <P>
      The provider will take your whole application as a children and render it inside a regular <code>Context.Provider</code>, created with <code>React.createContextProvider</code>.
      We will also render the <code>FullScreenGallery</code> itself. For shortness, I'll call it <code>GalleryProvider</code>.
    </P>

    <CodeSandboxIframe slug='introducing-the-galleryprovider-zs0i1' caption="The GalleryProvider" module='/GalleryProvider.jsx' view='editor' />

    <P>
      Here is our provider.
      Note that this component is stateful and we are passing the <code>active</code> prop to the <code>FullScreenGallery</code> component.
      We could also just write something like <code>{'{active && \<FullScreenGallery ... /\>}'}</code>, but this way the <code>FullScreenGallery</code> will know about being active or not, and will be able to implement any kind of in/out animation.
      Let's wrap our component tree with this provider and wire the <code>Gallery</code> component to have access to it's goodies via the <code>useFullScreenGallery</code> hook.
    </P>

    <CodeSandboxIframe slug='introducing-the-galleryprovider-crlud' caption="Wiring the Gallery component" module='/Gallery.jsx' />

    <P>
      Starting to look functional already. When you click on an image on the gallery, it triggers the <code>FullScreenGallery</code> to show.
      For demonstrational purposes, I've added a second gallery to show how they share the usage of the fullscrren gallery.
      We are missing some behavior yet, because the <code>FullScreenGallery</code> can't be closed, and we can't navigate through the images on it.
      Let's wire the close button, the prev/next buttons and the <code>>onClick</code> handler for the images on the strip.
    </P>

    <CodeSandboxIframe slug='wiring-the-fullscreengallery-controls-boq0r' caption="Wiring the FullScreenGallery controls" module='/FullScreenGallery/index.jsx' />

    <P>
      That's it. We are finished. My version of full screen gallery also has keyboard and swipe support, but this post got really long already.
      In any case, you can implement those on your own following following the same pattern for organizing behavior we used for the Panner.
      There's also still good oportunity for refactor and better code organization here, buy I think we did a pretty good job so far.
    </P>

    <P>
      I hope you found this little big tutorial helpful or even enlightening.
      If you have any constructive input, comments or suggestions, I would love to hear about them. Use the comments section beneath!
    </P>
  </Typography>
}

const post = {
  // Here "1" stands for February. Initially I put "2", but I was seeing March when displaying the date.
  // Took me some time to understand what was happening. This is why I love-hate JS.
  date: new Date(2020, 1, 16),
  title: <>Creating a gallery component <br /> with react and styled-components</>,
  description: 'Step by step guide',
  component: Post,
  slug: 'creating-a-gallery-component-with-react',
  tags: ['react', 'software']
}

export default post
