export default function auth({ next, router }) {
    if (false){
      return router.push({ name: 'login' });
    }
  
    return next();
  }