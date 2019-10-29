import Vue from 'vue';
import Router from 'vue-router';
import Fog from '@/components/pages/Fog'
import Detection from '@/components/pages/Detection'
import Information from '@/components/pages/Information'
import About from '@/components/pages/About'
import Home from '@/components/pages/Home'
import ContactForm from '@/components/pages/ContactForm'
import Books from '@/components/pages/information/books'
import Films from '@/components/pages/information/films'
import Movies from '@/components/pages/information/movies'
import Magazines from '@/components/pages/information/magazines'
import DetectionInfo from '@/components/pages/DetectionInfo'
import Detectionpage1 from '@/components/pages/Detectionpage1'
import Section1 from '@/components/pages/fog/Section1'
import Section2 from '@/components/pages/fog/Section2'
import Section3 from '@/components/pages/fog/Section3'
import Section4 from '@/components/pages/fog/Section4'
import Section5 from '@/components/pages/fog/Section5'
import Section6 from '@/components/pages/fog/Section6'


Vue.use(Router)


let routes=[
  
  {
    path: '/',
    name: 'Home',
    component: Home,
  },  
  {
    path: '/fog',
    name: 'Fog',
    component: Fog,
  },
  {
    path: '/fog',
    name: 'Section1',
    component: Section1,
  },
  {
    path: '/fog',
    name: 'Section2',
    component: Section2,
  },
  {
    path: '/fog',
    name: 'Section3',
    component: Section3,
  },
  {
    path: '/fog',
    name: 'Section4',
    component: Section4,
  },
  {
    path: '/fog',
    name: 'Section5',
    component: Section5,
  },
  {
    path: '/fog',
    name: 'Section6',
    component: Section6,
  },
  {
    path: '/detection',
    name: 'Detection',
    component: Detection,
    redirect: '/detection/info',
    children: [
      {
        path: 'info',
        name: 'info',
        component: DetectionInfo
      },
      {
        path: 'page1',
        name: 'page1',
        component: Detectionpage1
      },
    ]
  },
  {
    path: '/information',
    name: 'Information',
    component: Information,
    redirect: '/information/books',
    children: [
      {
        path: 'books',
        name: 'Books',
        component: Books
      },
      {
        path: 'movies',
        name: 'Movies',
        component: Movies
      },
      {
        path: 'films',
        name: 'Films',
        component: Films
      },
      {
        path: 'magazines',
        name: 'Magazines',
        component: Magazines
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactForm
  }

  
]

  export default new Router({
    mode: 'history',
    routes
  })
