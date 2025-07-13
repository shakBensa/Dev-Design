"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Star, ChevronRight, ArrowUp, Code, Palette, Smartphone, Globe, Zap, Shield, Users, TrendingUp, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';

const DevDesignWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBlogPost, setSelectedBlogPost] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigation = [
    { id: 'home', label: 'בית' },
    { id: 'blog', label: 'בלוג' },
    { id: 'testimonials', label: 'המלצות' },
    { id: 'contact', label: 'צור קשר' }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'פיתוח אתרים',
      description: 'פיתוח אתרים מותאמים אישית עם טכנולוגיות מתקדמות כמו React, Vue.js ו-Node.js',
      features: ['React & Vue.js', 'Node.js Backend', 'בסיסי נתונים', 'API Development']
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: 'עיצוב UI/UX',
      description: 'עיצוב ממשקי משתמש אינטואיטיביים וחוויית משתמש מעולה המותאמת לקהל היעד',
      features: ['עיצוב UI/UX', 'Figma & Adobe XD', 'Wireframing', 'Prototyping']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: 'אפליקציות מובייל',
      description: 'פיתוח אפליקציות מובייל חדשניות עבור iOS ו-Android עם React Native',
      features: ['React Native', 'iOS & Android', 'Cross-platform', 'App Store Optimization']
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'אתרי E-commerce',
      description: 'בניית חנויות אונליין מתקדמות עם מערכות תשלום מאובטחות וניהול מלאי',
      features: ['Shopify & WooCommerce', 'מערכות תשלום', 'ניהול מלאי', 'אנליטיקה מתקדמת']
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'אופטימיזציה וביצועים',
      description: 'שיפור מהירות האתר, SEO מתקדם ואופטימיזציה למנועי חיפוש',
      features: ['SEO מתקדם', 'אופטימיזציה טכנית', 'Google Analytics', 'Core Web Vitals']
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'אבטחת אתרים',
      description: 'הגנה מתקדמת על אתרים ואפליקציות עם פרוטוקולי אבטחה מהמתקדמים בתעשייה',
      features: ['SSL Certificates', 'Firewall Protection', 'Security Audits', 'Regular Updates']
    }
  ];

  const technologies = [
    { name: 'React', color: 'from-blue-400 to-blue-600' },
    { name: 'Vue.js', color: 'from-green-400 to-green-600' },
    { name: 'Node.js', color: 'from-green-500 to-green-700' },
    { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', color: 'from-green-600 to-green-800' },
    { name: 'PostgreSQL', color: 'from-blue-600 to-blue-800' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' },
    { name: 'Docker', color: 'from-blue-500 to-blue-700' },
    { name: 'Figma', color: 'from-purple-400 to-purple-600' },
    { name: 'Adobe XD', color: 'from-pink-400 to-pink-600' },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-teal-600' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'למה אתר מותאם אישית עדיף מתבנית מוכנה',
      excerpt: 'גלו מדוע השקעה באתר מותאם אישית מביאה תשואה גבוהה יותר ומספקת לכם יתרון תחרותי ברור.',
      date: '15 יוני 2024',
      readTime: '8 דקות קריאה',
      category: 'פיתוח',
      image: 'from-blue-500 to-purple-600',
      content: `
        <p>בעולם הדיגיטלי של היום, האתר שלכם הוא לרוב הרושם הראשון שלקוחות פוטנציאליים מקבלים מהעסק שלכם. השאלה היא: האם להשקיע באתר מותאם אישית או להסתפק בתבנית מוכנה?</p>
        
        <h3>למה תבניות מוכנות לא מספיקות?</h3>
        <p>תבניות מוכנות נראות אולי כפתרון מהיר וזול, אבל הן מגבילות אתכם בכמה אופנים משמעותיים:</p>
        <ul>
          <li>עיצוב גנרי שלא מבדיל אתכם מהמתחרים</li>
          <li>מגבלות בהתאמה אישית</li>
          <li>ביצועים איטיים בגלל קוד לא מותאם</li>
          <li>קשיים בהרחבה עתידית</li>
        </ul>
        
        <h3>היתרונות של אתר מותאם אישית</h3>
        <p>כאשר אתם משקיעים בפיתוח מותאם אישית, אתם מקבלים:</p>
        <ul>
          <li><strong>זהות ייחודית:</strong> עיצוב שמשקף בדיוק את המותג שלכם</li>
          <li><strong>ביצועים מעולים:</strong> קוד מותאם שמספק מהירות וחוויית משתמש טובה</li>
          <li><strong>גמישות מלאה:</strong> אפשרות להוסיף כל פונקציה שתרצו</li>
          <li><strong>SEO מתקדם:</strong> אופטימיזציה מלאה למנועי חיפוש</li>
        </ul>
        
        <h3>התשואה על ההשקעה</h3>
        <p>אתר מותאם אישית הוא השקעה שמחזירה את עצמה. לקוחות שלנו מדווחים על:</p>
        <ul>
          <li>עלייה של 40-60% בזמן השהייה באתר</li>
          <li>שיפור של 25-35% בשיעורי ההמרה</li>
          <li>עלייה משמעותית במספר הפניות והמכירות</li>
        </ul>
        
        <p>השורה התחתונה: אתר מותאם אישית הוא לא הוצאה - זו השקעה שמחזירה את עצמה ומניבה רווחים לטווח הארוך.</p>
      `
    },
    {
      id: 2,
      title: 'איך עיצוב UI/UX טוב מגדיל מכירות',
      excerpt: 'עיצוב מקצועי לא רק נראה טוב - הוא מגדיל המרות, משפר חוויית משתמש ומעלה את הרווחים שלכם.',
      date: '12 יוני 2024',
      readTime: '6 דקות קריאה',
      category: 'עיצוב',
      image: 'from-pink-500 to-orange-600',
      content: `
        <p>עיצוב UI/UX איכותי הוא הרבה יותר מאשר "להיות יפה". זהו הכלי החזק ביותר שלכם להגדלת מכירות והמרות. בואו נראה איך זה עובד.</p>
        
        <h3>מה זה UI/UX ולמה זה חשוב?</h3>
        <p>UI (User Interface) זה מה שהמשתמש רואה, UX (User Experience) זה איך הוא מרגיש. עיצוב טוב משלב את השניים ליצירת חוויה שמובילה לפעולה.</p>
        
        <h3>איך עיצוב טוב מגדיל מכירות?</h3>
        <ul>
          <li><strong>בניית אמון:</strong> עיצוב מקצועי יוצר אמון מיידי</li>
          <li><strong>ניווט אינטואיטיבי:</strong> לקוחות מוצאים מה שהם מחפשים בקלות</li>
          <li><strong>CTA ברורים:</strong> כפתורי פעולה שמובילים להמרה</li>
          <li><strong>חוויה רציפה:</strong> מסע לקוח חלק מהרושם הראשון ועד הרכישה</li>
        </ul>
        
        <h3>סטטיסטיקות מרשימות</h3>
        <p>מחקרים מוכיחים שעיצוב טוב מביא תוצאות מדידות:</p>
        <ul>
          <li>88% מהמשתמשים לא יחזרו לאתר אחרי חוויה רעה</li>
          <li>עיצוב טוב יכול להגדיל המרות ב-200% ויותר</li>
          <li>75% מהאמינות נקבעת על בסיס העיצוב</li>
          <li>משתמשים מחליטים על אתר תוך 50 אלפיות שנייה</li>
        </ul>
        
        <h3>איך אנחנו עושים את זה?</h3>
        <p>בכל פרויקט אנחנו מתחילים במחקר מעמיק של המשתמשים וההתנהגות שלהם. אנחנו יוצרים wireframes, מבצעים בדיקות A/B ומותאמים את העיצוב בהתאם לתוצאות.</p>
        
        <p>התוצאה: אתר שלא רק נראה טוב, אלא גם מביא תוצאות מדידות לעסק שלכם.</p>
      `
    },
    {
      id: 3,
      title: 'מהירות אתר = יותר לקוחות',
      excerpt: 'מחקרים מוכיחים שאתר מהיר יותר מביא יותר לקוחות, מכירות גבוהות יותר ודירוג טוב יותר בגוגל.',
      date: '10 יוני 2024',
      readTime: '5 דקות קריאה',
      category: 'אופטימיזציה',
      image: 'from-green-500 to-teal-600',
      content: `
        <p>שנייה אחת. זה כל מה שצריך כדי לאבד לקוח פוטנציאלי. במחקר של גוגל התגלה שעיכוב של שנייה אחת בטעינת האתר מקטין המרות ב-20%.</p>
        
        <h3>מדוע מהירות כל כך חשובה?</h3>
        <p>האתר שלכם מתחרה על תשומת הלב של המשתמשים. בעולם של עומס מידע, סבלנות היא מותרות.</p>
        
        <ul>
          <li><strong>חוויית משתמש:</strong> אתר מהיר = משתמש מרוצה</li>
          <li><strong>SEO:</strong> גוגל מעדיף אתרים מהירים בתוצאות החיפוש</li>
          <li><strong>המרות:</strong> קורלציה ישירה בין מהירות למכירות</li>
          <li><strong>מובייל:</strong> במובייל המהירות עוד יותר קריטית</li>
        </ul>
        
        <h3>הנתונים דוברים בעד עצמם</h3>
        <ul>
          <li>40% מהמשתמשים עוזבים אתר שלוקח יותר מ-3 שניות לטעון</li>
          <li>שיפור של שנייה אחת יכול להגדיל המרות ב-27%</li>
          <li>אתרי e-commerce מהירים מוכרים פי 2.5 יותר</li>
          <li>100 אלפיות שנייה = 1% עלייה ברווחים (אמזון)</li>
        </ul>
        
        <h3>איך אנחנו מאיצים אתרים?</h3>
        <p>יש עשרות דרכים לשפר מהירות, אבל אנחנו מתמחים בפתרונות היעילים ביותר:</p>
        <ul>
          <li>אופטימיזציה של תמונות וקבצים</li>
          <li>CDN מתקדם</li>
          <li>קוד נקי ומותאם</li>
          <li>Cache אינטליגנטי</li>
          <li>מאגרי נתונים מעולים</li>
        </ul>
        
        <h3>Core Web Vitals</h3>
        <p>גוגל מדרגת אתרים גם לפי מדדי Core Web Vitals - מדדי מהירות מתקדמים. אנחנו מבטיחים שהאתר שלכם יעמוד בכל התקנים.</p>
        
        <p>השורה התחתונה: השקעה במהירות האתר מחזירה את עצמה במהירות.</p>
      `
    },
    {
      id: 4,
      title: 'אבטחת אתרים - השקעה שמגנה על העסק',
      excerpt: 'פרצת אבטחה יכולה לעלות לכם מאות אלפי שקלים. הגנה מקדימה חוסכת כסף ומוניטין.',
      date: '8 יוני 2024',
      readTime: '7 דקות קריאה',
      category: 'אבטחה',
      image: 'from-red-500 to-purple-600',
      content: `
        <p>פרצת אבטחה היא לא רק בעיה טכנית - היא יכולה להרוס עסק. העלות הממוצעת של פרצת אבטחה בישראל היא 2.3 מיליון שקל, אבל העלות האמיתית היא הרבה יותר גבוהה.</p>
        
        <h3>מה באמת מסתכן?</h3>
        <ul>
          <li><strong>נתוני לקוחות:</strong> מידע אישי, פרטי אשראי, פרטי התקשרות</li>
          <li><strong>מוניטין:</strong> אמון שנבנה שנים יכול להיהרס ברגע</li>
          <li><strong>המשכיות עסקית:</strong> האתר יכול להיות מושבת לשבועות</li>
          <li><strong>קנסות:</strong> הפרת חוק הגנת הפרטיות עולה ביוקר</li>
        </ul>
        
        <h3>איומים נפוצים</h3>
        <p>האקרים לא מחפשים רק אתרי ענק. 43% מהתקפות הסייבר מכוונות לעסקים קטנים ובינוניים:</p>
        <ul>
          <li>מלוויר והונאות פישינג</li>
          <li>התקפות DDoS</li>
          <li>זריקת SQL</li>
          <li>פרצות בתוספים ועדכונים</li>
        </ul>
        
        <h3>איך אנחנו מגנים עליכם?</h3>
        <p>אבטחה אמיתית היא לא רק SSL. אנחנו מטמיעים שכבות הגנה מרובות:</p>
        
        <ul>
          <li><strong>Firewall מתקדם:</strong> חסימת תעבורה חשודה</li>
          <li><strong>גיבויים אוטומטיים:</strong> שחזור מהיר במקרה של בעיה</li>
          <li><strong>מוניטורינג 24/7:</strong> זיהוי מוקדם של איומים</li>
          <li><strong>הצפנה מתקדמת:</strong> הגנה על נתונים רגישים</li>
          <li><strong>עדכונים קבועים:</strong> סגירת פרצות אבטחה</li>
        </ul>
        
        <h3>תקינה ורגולציה</h3>
        <p>אנחנו מבטיחים עמידה בתקנים הגבוהים ביותר:</p>
        <ul>
          <li>GDPR לעסקים בינלאומיים</li>
          <li>חוק הגנת הפרטיות הישראלי</li>
          <li>תקן PCI DSS לתשלומים</li>
          <li>ISO 27001 לניהול אבטחת מידע</li>
        </ul>
        
        <h3>החשיבות של גישה מונעת</h3>
        <p>בניגוד לגישה המקובלת של "נטפל בבעיה כשהיא תגיע", אנחנו מאמינים בהגנה מקדימה. הרבה יותר זול ויעיל למנוע פרצה מאשר לטפל בנזק.</p>
        
        <p>אל תחכו לפרצה הראשונה. השקיעו באבטחה עוד היום.</p>
      `
    },
    {
      id: 5,
      title: 'אפליקציית מובייל - הכרח בעידן הנוכחי',
      excerpt: 'למה כל עסק צריך אפליקציית מובייל וכיצד היא יכולה לשפר את הקשר עם הלקוחות ולהגדיל מכירות.',
      date: '5 יוני 2024',
      readTime: '6 דקות קריאה',
      category: 'מובייל',
      image: 'from-indigo-500 to-blue-600',
      content: `
        <p>60% מהגלישה באינטרנט היום מתבצעת ממובייל. אם אין לכם אפליקציה או אתר מותאם מובייל, אתם מפספסים את רוב הלקוחות שלכם.</p>
        
        <h3>מדוע אפליקציית מובייל?</h3>
        <p>אפליקציית מובייל היא לא רק "אתר קטן". היא פלטפורמה שלמה שמספקת חוויה מותאמת למשתמש הנייד:</p>
        
        <ul>
          <li><strong>נגישות מיידית:</strong> המשתמש לא צריך לזכור URL</li>
          <li><strong>מהירות:</strong> אפליקציות מהירות יותר מאתרים</li>
          <li><strong>התראות:</strong> קשר ישיר עם הלקוח</li>
          <li><strong>פונקציות מתקדמות:</strong> גישה למצלמה, מיקום, אנשי קשר</li>
        </ul>
        
        <h3>הנתונים מדברים בעד עצמם</h3>
        <ul>
          <li>אפליקציות מובייל מניבות פי 3 יותר מאתרים</li>
          <li>85% מהזמן במובייל מבוזבז באפליקציות</li>
          <li>שיעורי ההמרה באפליקציות גבוהים פי 2-3</li>
          <li>משתמשי אפליקציות מבקרים פי 5 יותר</li>
        </ul>
        
        <h3>סוגי האפליקציות שאנחנו מפתחים</h3>
        <p>אנחנו מתמחים בכל סוגי האפליקציות הנדרשות לעסקים:</p>
        
        <ul>
          <li><strong>אפליקציות חנות:</strong> מכירות ישירות מהאפליקציה</li>
          <li><strong>אפליקציות שירות:</strong> הזמנות, תורים, מעקב</li>
          <li><strong>אפליקציות תוכן:</strong> בלוגים, חדשות, מדיה</li>
          <li><strong>אפליקציות פנימיות:</strong> ניהול עובדים ומערכות</li>
        </ul>
        
        <h3>הטכנולוגיה שלנו</h3>
        <p>אנחנו משתמשים ב-React Native - הטכנולוגיה המתקדמת ביותר לפיתוח אפליקציות:</p>
        
        <ul>
          <li><strong>פיתוח מהיר:</strong> אפליקציה אחת לשני פלטפורמות</li>
          <li><strong>ביצועים מעולים:</strong> מהירות כמו אפליקציות מקוריות</li>
          <li><strong>עדכונים פשוטים:</strong> שינויים מהירים וללא סיבוכים</li>
          <li><strong>עלות נמוכה:</strong> חיסכון משמעותי בעלויות פיתוח</li>
        </ul>
        
        <h3>התהליך שלנו</h3>
        <p>אנחנו מתחילים בהבנת הצרכים שלכם ובונים אפליקציה שמספקת בדיוק מה שהלקוחות שלכם צריכים:</p>
        
        <ul>
          <li>מחקר משתמשים וצרכים</li>
          <li>עיצוב UI/UX מותאם מובייל</li>
          <li>פיתוח ובדיקות מקיפות</li>
          <li>פרסום בחנויות האפליקציות</li>
          <li>תמיכה ושדרוגים שוטפים</li>
        </ul>
        
        <p>העתיד הוא מובייל. אל תישארו מאחור.</p>
      `
    },
    {
      id: 6,
      title: 'SEO שמביא תוצאות מדידות',
      excerpt: 'איך אופטימיזציה נכונה למנועי חיפוש יכולה להביא לכם יותר לקוחות פוטנציאליים בחינם.',
      date: '3 יוני 2024',
      readTime: '8 דקות קריאה',
      category: 'שיווק דיגיטלי',
      image: 'from-yellow-500 to-orange-600',
      content: `
        <p>93% מהחיפושים באינטרנט מתחילים בגוגל. אם אתם לא מופיעים בעמוד הראשון, אתם פשוט לא קיימים. SEO נכון הוא הדרך היעילה ביותר להביא לקוחות איכותיים בחינם.</p>
        
        <h3>מה זה SEO ומדוע זה חשוב?</h3>
        <p>SEO (Search Engine Optimization) זה האמנות והמדע של לגרום לאתר שלכם להופיע בתוצאות החיפוש הראשונות. זה לא רק על מילות מפתח - זה על הבנת כוונות המשתמש וספק תוכן שמספק ערך אמיתי.</p>
        
        <h3>למה SEO עדיף מפרסום בתשלום?</h3>
        <ul>
          <li><strong>עלות נמוכה לטווח הארוך:</strong> השקעה חד-פעמית עם תוצאות מתמשכות</li>
          <li><strong>אמינות גבוהה:</strong> משתמשים סומכים יותר על תוצאות אורגניות</li>
          <li><strong>תנועה איכותית:</strong> משתמשים שמחפשים בדיוק את מה שאתם מציעים</li>
          <li><strong>יתרון תחרותי:</strong> מקום ראשון בגוגל = מקום ראשון בשוק</li>
        </ul>
        
        <h3>המספרים מדברים בעד עצמם</h3>
        <ul>
          <li>המקום הראשון בגוגל מקבל 33% מהקליקים</li>
          <li>75% מהמשתמשים לא עוברים לעמוד השני</li>
          <li>SEO מביא פי 8 יותר תנועה מפרסום בתשלום</li>
          <li>61% מהמשתמשים מתקשרים לעסק אחרי חיפוש מקומי</li>
        </ul>
        
        <h3>האסטרטגיה שלנו</h3>
        <p>אנחנו לא מאמינים בטריקים קצרי מדי. אנחנו בונים אסטרטגיית SEO מקיפה שמביאה תוצאות לטווח הארוך:</p>
        
        <h4>1. מחקר מילות מפתח מתקדם</h4>
        <p>אנחנו מוצאים את המילות שהלקוחות שלכם באמת מחפשים, לא רק את הכי פופולריות.</p>
        
        <h4>2. אופטימיזציה טכנית</h4>
        <ul>
          <li>מהירות אתר מעולה</li>
          <li>מבנה URL נקי</li>
          <li>Schema markup מתקדם</li>
          <li>אופטימיזציה למובייל</li>
        </ul>
        
        <h4>3. תוכן איכותי</h4>
        <p>אנחנו יוצרים תוכן שמספק ערך אמיתי למשתמשים ופותר את הבעיות שלהם.</p>
        
        <h4>4. קישורים איכותיים</h4>
        <p>בניית רשת קישורים מאתרים רלוונטיים ומכובדים בתחום שלכם.</p>
        
        <h3>SEO מקומי</h3>
        <p>אם אתם עסק מקומי, אנחנו מתמחים גם ב-SEO מקומי:</p>
        <ul>
          <li>אופטימיזציה ל-Google My Business</li>
          <li>ביקורות וחוות דעת</li>
          <li>מיפוי מקומי</li>
          <li>תוכן מותאם אזורית</li>
        </ul>
        
        <h3>מעקב ומדידה</h3>
        <p>אנחנו מודדים הכל: דירוגים, תנועה, המרות, והכי חשוב - ROI. אתם תקבלו דוחות מפורטים שמראים בדיוק איך ההשקעה ב-SEO מחזירה את עצמה.</p>
        
        <p>SEO זה לא הוצאה - זו השקעה חכמה שמחזירה את עצמה פי כמה.</p>
      `
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'שרה כהן',
      company: 'Startup טכנולוגיות',
      text: 'הצוות פיתח לנו אתר מדהים שהגדיל את המכירות שלנו ב-150%. עבודה מקצועית, מהירה ובאיכות גבוהה מאוד.',
      rating: 5,
      project: 'פיתוח אתר E-commerce',
      image: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      name: 'דוד לוי',
      company: 'סטודיו עיצוב דיגיטלי',
      text: 'האפליקציה שפיתחו עבורנו זוכה להצלחה רבה בחנות האפליקציות. הם הבינו בדיוק את החזון שלנו.',
      rating: 5,
      project: 'פיתוח אפליקציית מובייל',
      image: 'from-blue-500 to-teal-500'
    },
    {
      id: 3,
      name: 'רחל אברהם',
      company: 'חברת ייעוץ עסקי',
      text: 'עיצוב UI/UX מעולה שהפך את האתר שלנו לנגיש וידידותי למשתמש. הלקוחות שלנו מרוצים מאוד.',
      rating: 5,
      project: 'עיצוב UI/UX',
      image: 'from-green-500 to-blue-500'
    },
    {
      id: 4,
      name: 'מיכאל רוזנברג',
      company: 'חברת השקעות',
      text: 'שיפור מהירות האתר והאופטימיזציה לSEO הביאו לנו תוצאות מדהימות. עלינו ל-3 מקומות ראשונים בגוגל.',
      rating: 5,
      project: 'אופטימיזציה ו-SEO',
      image: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'ענת שמעון',
      company: 'רשת מסעדות',
      text: 'המערכת שפיתחו עבורנו חוסכת לנו שעות רבות מדי יום. פתרון מדויק בדיוק למה שהיינו צריכים.',
      rating: 5,
      project: 'פיתוח מערכת ניהול',
      image: 'from-teal-500 to-green-500'
    },
    {
      id: 6,
      name: 'אלון גרוס',
      company: 'חברת פינטק',
      text: 'האבטחה שהטמיעו באתר שלנו מהמתקדמות בתעשייה. אנחנו שקטים שהנתונים הרגישים שלנו מוגנים.',
      rating: 5,
      project: 'אבטחת אתרים',
      image: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '120+', label: 'פרויקטים הושלמו' },
    { number: '85+', label: 'לקוחות מרוצים' },
    { number: '100%', label: 'שביעות רצון' },
    { number: '24/6', label: 'תמיכה טכנית' }
  ];

  const teamMembers = [
    {
      name: 'שקד בן סמון',
      role: 'Lead Developer',
      specialty: 'React, Node.js, Python',
      image: 'from-blue-500 to-purple-600'
    },
    {
      name: 'דנה מטטוב',
      role: 'UX/UI Designer',
      specialty: 'Figma, Adobe XD, User Research',
      image: 'from-pink-500 to-orange-600'
    },
    {
      name: 'רביד רזיאב',
      role: 'Project Manager',
      specialty: 'Agile, Scrum, Team Leadership',
      image: 'from-green-500 to-teal-600'
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          </div>
          <p className="text-white text-xl font-light">טוען...</p>
        </div>
      </div>
    );
  }

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Dev <span className="text-yellow-400">&</span> Design
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fadeInUp delay-300">
            פיתוח ועיצוב אתרים מתקדמים ואפליקציות לעסק שלכם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-500">
            <button 
              onClick={() => handlePageChange('contact')}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              בואו נתחיל פרויקט
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
              הצגת עבודות
            </button> */}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 animate-bounce delay-1000">
          <Code className="w-12 h-12 text-white/30" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-2000">
          <Palette className="w-12 h-12 text-white/30" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">המספרים מדברים בעדנו</h2>
            <p className="text-gray-600 text-lg">הישגים שמוכיחים את האמינות והמקצועיות שלנו</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">השירותים שלנו</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mb-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">הטכנולוגיות שלנו</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className={`bg-gradient-to-r ${tech.color} p-6 rounded-xl text-white text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">הצוות שלנו</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${member.image} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">מוכנים להתחיל?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            בואו ניצור יחד את הפתרון הדיגיטלי המושלם עבור העסק שלכם
          </p>
          <button 
            onClick={() => handlePageChange('contact')}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            בואו נתחיל לעבוד יחד
          </button>
        </div>
      </section>
    </div>
  );

  const BlogPage = () => {
    if (selectedBlogPost) {
      const post = blogPosts.find(p => p.id === selectedBlogPost);
      
      if (!post) {
        return (
          <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">המאמר לא נמצא</h1>
              <button 
                onClick={() => setSelectedBlogPost(null)}
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                חזרה לבלוג
              </button>
            </div>
          </div>
        );
      }
      
      return (
        <div className="min-h-screen bg-gray-50 pt-20">
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <button 
              onClick={() => setSelectedBlogPost(null)}
              className="mb-8 flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5 ml-2 rotate-180" />
              חזרה לבלוג
            </button>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`h-64 bg-gradient-to-br ${post.image} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">
                    {post.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-8 border-b pb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    lineHeight: '1.8',
                  }}
                />
              </div>
            </article>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">רוצים לדעת יותר?</h3>
              <p className="text-gray-600 mb-6">בואו נדבר על איך אנחנו יכולים לעזור לכם להגשים את המטרות שלכם</p>
              <button 
                onClick={() => handlePageChange('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                בואו נתחיל לעבוד יחד
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">הבלוג שלנו</h1>
            <p className="text-xl text-gray-600">מאמרים מעניינים על פיתוח, עיצוב וטכנולוגיה</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${post.image} flex items-center justify-center`}>
                  <span className="text-white text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedBlogPost(post.id)}
                    className="text-purple-600 font-semibold hover:text-purple-800 transition-colors flex items-center"
                  >
                    קרא עוד <ChevronRight className="w-4 h-4 mr-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const TestimonialsPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">מה אומרים עלינו</h1>
          <p className="text-xl text-gray-600">הלקוחות שלנו מספרים על החוויה שלהם</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.image} rounded-full flex items-center justify-center ml-4`}>
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  <p className="text-purple-600 text-sm font-semibold">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">צרו קשר</h1>
          <p className="text-xl text-gray-600">בואו נדבר על הפרויקט הבא שלכם</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">בואו נתחיל לעבוד יחד</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              יש לכם רעיון לפרויקט? אנחנו כאן כדי להפוך אותו למציאות. 
              צרו איתנו קשר ובואו נתחיל לבנות משהו מדהים יחד.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-600 ml-3" />
                <div>
                  <div className="font-semibold text-gray-800">אימייל</div>
                  <div className="text-gray-600">hello@devdesign.co.il</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-600 ml-3" />
                <div>
                  <div className="font-semibold text-gray-800">טלפון</div>
                  <div className="text-gray-600">052-7221005</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-purple-600 ml-3" />
                {/* <div>
                  <div className="font-semibold text-gray-800">כתובת</div>
                  <div className="text-gray-600">רוטשילד 123, תל אביב</div>
                </div> */}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">עקבו אחרינו</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitMessage('');

      try {
        // Here you would typically send to your backend API
        // Example API call:
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitMessage('ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            projectType: '',
            message: ''
          });
        } else {
          setSubmitMessage('אירעה שגיאה בשליחת ההודעה. אנא נסו שוב.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitMessage('אירעה שגיאה בשליחת ההודעה. אנא נסו שוב.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-gray-800">שלחו לנו הודעה</h3>
        
        {submitMessage && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitMessage.includes('בהצלחה') 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">שם פרטי</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">שם משפחה</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500" 
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">אימייל</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">טלפון</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">סוג פרויקט</label>
            <select 
              name="projectType"
              value={formData.projectType}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
            >
              <option value="">בחרו סוג פרויקט</option>
              <option value="website">פיתוח אתר</option>
              <option value="uiux">עיצוב UI/UX</option>
              <option value="mobile">אפליקציית מובייל</option>
              <option value="ecommerce">אתר E-commerce</option>
              <option value="optimization">אופטימיזציה</option>
              <option value="other">אחר</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">תיאור הפרויקט</label>
            <textarea 
              rows={4} 
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              required
              placeholder="ספרו לנו על הפרויקט שלכם..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold transform transition-all duration-300 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105'
            }`}
          >
            {isSubmitting ? 'שולח...' : 'שלח הודעה'}
          </button>
        </form>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'blog': return <BlogPage />;
      case 'testimonials': return <TestimonialsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="font-sans text-right" dir="rtl">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #374151;
        }
        .prose h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #4B5563;
        }
        .prose p {
          margin-bottom: 1.5rem;
        }
        .prose ul {
          margin-bottom: 1.5rem;
          padding-right: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          color: #7C3AED;
          font-weight: 600;
        }
      `}</style>

      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-md shadow-lg z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => handlePageChange('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                &lt;Dev & Design/&gt;
              </div>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`font-semibold transition-all duration-300 hover:text-purple-600 ${
                    currentPage === item.id ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-700'
                  } ${index > 0 ? 'mr-8' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fadeInUp">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handlePageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-right py-2 font-semibold transition-colors ${
                    currentPage === item.id ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                &lt;Dev & Design/&gt;
              </h3>
              <p className="text-gray-400">
                סטודיו מתמחה בפיתוח ועיצוב אתרים ואפליקציות מתקדמות
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">השירותים שלנו</h3>
              <ul className="space-y-2 text-gray-400">
                <li>פיתוח אתרים</li>
                <li>עיצוב UI/UX</li>
                <li>אפליקציות מובייל</li>
                <li>אתרי E-commerce</li>
                <li>אופטימיזציה</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">טכנולוגיות</h3>
              <ul className="space-y-2 text-gray-400">
                <li>React & Vue.js</li>
                <li>Node.js & Python</li>
                <li>React Native</li>
                <li>AWS & Docker</li>
                <li>Figma & Adobe XD</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">צור קשר</h3>
              <div className="space-y-2 text-gray-400">
                {/* <p>devdesign.sr@gmail.com</p> */}
                <p>052-7221005</p>
                {/* <p>רוטשילד 123, תל אביב</p> */}
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dev & Design. כל הזכויות שמורות</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default DevDesignWebsite;