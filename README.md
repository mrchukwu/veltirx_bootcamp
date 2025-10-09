# JavaScript Mastery Bootcamp - Landing Page

A comprehensive, modern landing page for a JavaScript and GitHub bootcamp built with HTML5, CSS3, and vanilla JavaScript. Features a clean design inspired by the Veltrix admin dashboard template with full Paystack payment integration.

![Bootcamp Landing Page](https://via.placeholder.com/800x400/667eea/ffffff?text=JavaScript+Mastery+Bootcamp)

## 🚀 Features

### Core Sections
- **Hero Banner** - Compelling introduction with key statistics
- **Benefits Section** - Why choose this bootcamp
- **Curriculum Overview** - 12-week learning timeline
- **Detailed Course Outline** - Tabbed interface for JavaScript, GitHub, and Projects
- **Instructor Profiles** - Meet the expert instructors
- **Student Testimonials** - Rotating carousel with success stories
- **FAQ Section** - Accordion-style frequently asked questions
- **Enrollment CTA** - Payment integration with Paystack
- **Contact Information** - Multiple ways to get in touch
- **Responsive Footer** - Complete site navigation and social links

### Interactive Features
- ✅ Fully responsive mobile-first design
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ Auto-rotating testimonial carousel
- ✅ Tabbed course outline interface
- ✅ FAQ accordion functionality
- ✅ Real-time form validation
- ✅ Scroll-triggered animations
- ✅ Notification system
- ✅ Loading states and micro-interactions

### Payment Integration
- ✅ Paystack payment gateway integration
- ✅ Multiple payment options (full payment/installments)
- ✅ Secure transaction handling
- ✅ Success/failure state management
- ✅ Form validation before payment
- ✅ Transaction reference generation

## 🛠️ Technology Stack

- **HTML5** - Semantic markup with proper accessibility
- **CSS3** - Modern flexbox/grid layouts with custom properties
- **Vanilla JavaScript** - ES6+ features, no dependencies
- **Paystack API** - Secure payment processing
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins typography

## 📁 Project Structure

```
veltrix_bootcamp/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles (1500+ lines)
├── js/
│   └── script.js          # All JavaScript functionality (700+ lines)
├── assets/
│   ├── README.md          # Asset guidelines
│   ├── logo.png           # Bootcamp logo
│   ├── hero-coding.svg    # Hero illustration
│   ├── instructor-*.jpg   # Instructor photos
│   ├── student-*.jpg      # Testimonial photos
│   ├── project-*.jpg      # Project screenshots
│   └── paystack-logo.png  # Payment logo
└── README.md              # This file
```

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Add Images** - Place your images in the `assets/` directory (see assets/README.md)
3. **Configure Paystack** - Replace the test key in `js/script.js` line 327
4. **Customize Content** - Edit the HTML content to match your bootcamp
5. **Deploy** - Upload to your web server

### Local Development
```bash
# Simply open index.html in your browser
# Or use a local server (recommended):
npx serve .
# Or
python -m http.server 8000
```

## ⚙️ Configuration

### Paystack Setup
1. Sign up at [Paystack.com](https://paystack.com)
2. Get your public key from the dashboard
3. Replace the test key in `js/script.js`:
```javascript
key: 'pk_live_your_actual_paystack_public_key', // Line 327
```

### Payment Amounts
Update payment amounts in `js/script.js` line 319:
```javascript
let amount = paymentType === 'full' ? 50000000 : 18000000; // Amount in kobo
```

### Content Customization
- **Bootcamp Name**: Search and replace "JavaScript Mastery Bootcamp"
- **Pricing**: Update prices in the enrollment section
- **Contact Info**: Update email, phone, and address
- **Social Links**: Update footer social media links
- **Course Details**: Modify curriculum and project information

## 🎨 Design Customization

### Color Scheme
The design uses CSS custom properties for easy color customization:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #48bb78;
  --error-color: #e53e3e;
  --text-color: #2d3748;
  --bg-color: #f8f9fc;
}
```

### Typography
- Primary Font: Poppins (Google Fonts)
- Font weights: 300, 400, 500, 600, 700
- Responsive typography with rem units

### Responsive Breakpoints
- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1024px and above
- Large screens: 1200px+

## 📱 Mobile Optimization

- **Mobile-first approach** with progressive enhancement
- **Touch-friendly interface** with appropriate button sizes
- **Optimized images** with proper sizing for all devices
- **Smooth animations** that respect user preferences
- **Accessible navigation** with keyboard support

## 🔧 Advanced Features

### Form Validation
- Real-time field validation
- Custom error messages
- Visual feedback for form states
- Email and phone format validation

### Testimonial Carousel
- Auto-rotation every 5 seconds
- Manual navigation with dots/arrows
- Pause on hover functionality
- Touch/swipe support ready

### FAQ System
- Accordion-style questions
- Smooth expand/collapse animations
- Only one question open at a time
- Screen reader accessible

### Notification System
- Success/error/info notifications
- Auto-dismiss after 5 seconds
- Stacked notification support
- Animated entrance/exit

## 🚀 Performance Optimizations

- **Vanilla JavaScript** - No framework overhead
- **Optimized CSS** - Efficient selectors and minimal repaints
- **Image optimization** - Proper sizing and formats
- **Lazy loading ready** - Easy to implement for images
- **Debounced events** - Scroll and resize listeners optimized

## 📊 Analytics & Tracking

Ready for integration with:
- Google Analytics
- Facebook Pixel
- Custom event tracking
- Conversion tracking for payments

Add tracking code before the closing `</body>` tag.

## 🔒 Security Features

- **XSS Protection** - Proper input sanitization
- **HTTPS Required** - For payment processing
- **Content Security Policy** - Ready for implementation
- **Form validation** - Client and server-side

## 🌐 SEO Optimization

- **Semantic HTML5** markup
- **Meta tags** optimized for social sharing
- **Structured data** ready for implementation
- **Fast loading** with optimized assets
- **Mobile-friendly** design
- **Accessible** with proper ARIA labels

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify** - Drag and drop deployment
- **Vercel** - GitHub integration
- **GitHub Pages** - Free hosting for public repos
- **Surge.sh** - Simple CLI deployment

### Traditional Hosting
- Upload all files to your web server
- Ensure HTTPS is enabled for Paystack
- Configure any necessary server headers

## 🐛 Troubleshooting

### Common Issues

1. **Paystack not loading**
   - Check your public key
   - Ensure HTTPS is enabled
   - Verify script tag is present

2. **Images not showing**
   - Check file paths in assets directory
   - Verify image file names match HTML references
   - Ensure proper file permissions

3. **Mobile menu not working**
   - Check JavaScript console for errors
   - Ensure all scripts are loaded properly
   - Verify CSS classes are applied correctly

4. **Form validation issues**
   - Check field IDs match JavaScript selectors
   - Verify required attributes are present
   - Test with various input types

## 🤝 Contributing

This is a complete, production-ready landing page template. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly across devices
5. Submit a pull request

## 📄 License

This project is open source. Feel free to use it for your own bootcamp or educational platform. Attribution appreciated but not required.

## 💬 Support

For questions or support:
- Create an issue in the repository
- Review the troubleshooting section
- Check the code comments for implementation details

## 🎯 Customization Checklist

Before launching your bootcamp landing page:

- [ ] Replace all placeholder content with your bootcamp details
- [ ] Add your actual images to the assets directory
- [ ] Configure Paystack with your live public key
- [ ] Update contact information (email, phone, address)
- [ ] Test payment flow in sandbox mode
- [ ] Update social media links
- [ ] Customize colors and branding
- [ ] Test on multiple devices and browsers
- [ ] Set up analytics tracking
- [ ] Configure your domain and HTTPS
- [ ] Test form submissions and notifications

## 📈 Features Roadmap

Potential future enhancements:
- Blog integration
- Student dashboard portal
- Course preview videos
- Live chat integration
- Multi-language support
- A/B testing capabilities
- Advanced analytics dashboard

---

**Built with ❤️ for coding education**

Transform your coding bootcamp with this comprehensive, modern landing page that converts visitors into enrolled students!
