import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Calendar, User, Tag, Clock, Search } from 'lucide-react';
export const BlogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const blogPosts = [{
    id: 1,
    title: 'The Importance of Quality Sand in Construction Projects',
    excerpt: 'Learn why the quality of sand used in your construction project can significantly impact durability and structural integrity.',
    content: "Sand is one of the most crucial materials in construction, serving as a fundamental component in concrete, mortar, and other building materials. The quality of sand used in construction projects directly impacts the strength, durability, and overall performance of structures. High-quality sharp sand, like that provided by Aleze Global, ensures proper binding with cement and aggregates, leading to stronger concrete mixtures. Poor quality sand, on the other hand, can contain impurities such as clay, silt, and organic matter that weaken concrete and compromise structural integrity. By investing in premium sharp sand for your construction projects, you're ensuring a solid foundation that will stand the test of time.",
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'Emmanuel Okonkwo',
    date: 'June 15, 2023',
    category: 'Construction Materials'
  }, {
    id: 2,
    title: 'Sustainable Dredging Practices: Balancing Development and Environment',
    excerpt: 'Discover how modern dredging operations can be conducted with minimal environmental impact while meeting construction needs.',
    content: "Dredging is essential for maintaining waterways, creating new land for development, and sourcing construction materials. However, traditional dredging practices have often been criticized for their environmental impact. At Aleze Global, we've implemented sustainable dredging practices that balance development needs with environmental conservation. Our approach includes careful site selection, use of modern equipment that minimizes turbidity, proper disposal of dredged materials, and habitat restoration where necessary. By adopting these practices, we ensure that our dredging operations have minimal impact on aquatic ecosystems while still meeting the demands of construction and development projects. This sustainable approach not only benefits the environment but also ensures long-term viability of waterways and coastal areas.",
    image: 'https://images.unsplash.com/photo-1518228684305-2e7e20336f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'Chioma Nwosu',
    date: 'July 23, 2023',
    category: 'Dredging'
  }, {
    id: 3,
    title: 'Choosing the Right Heavy Equipment for Your Construction Project',
    excerpt: 'A guide to selecting the appropriate heavy equipment based on project requirements, site conditions, and budget constraints.',
    content: "Selecting the right heavy equipment for your construction project can significantly impact efficiency, cost, and project timelines. The first step is to clearly define your project requirements, including the scope of work, site conditions, and specific tasks that need to be performed. For earthmoving and excavation, excavators are versatile machines that come in various sizes suitable for different projects. Payloaders, on the other hand, are ideal for loading materials and clearing sites. When choosing equipment, consider factors such as capacity, reach, mobility, and fuel efficiency. It's also important to assess whether purchasing or renting equipment makes more financial sense for your project. At Aleze Global, we offer a range of well-maintained heavy equipment for rent, including excavators and payloaders, to meet your specific project needs.",
    image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'Oluwaseun Adebayo',
    date: 'August 10, 2023',
    category: 'Equipment Rental'
  }, {
    id: 4,
    title: 'The Benefits of Waterfront Properties for Industrial Operations',
    excerpt: 'Explore how waterfront locations can provide strategic advantages for businesses in logistics, manufacturing, and distribution.',
    content: 'Waterfront properties offer numerous advantages for industrial and commercial operations, particularly those involved in logistics, manufacturing, and distribution. Direct access to water transportation can significantly reduce shipping costs and improve supply chain efficiency. Waterfront locations also often provide ample space for operations, storage, and future expansion. For businesses that require water for their operations, such as certain manufacturing processes, having a waterfront location eliminates the need for complex water supply systems. Additionally, waterfront properties can serve as attractive locations for corporate offices, combining functionality with aesthetic appeal. At Aleze Global, we offer prime waterfront leasing opportunities that can provide your business with these strategic advantages.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'Amina Ibrahim',
    date: 'September 5, 2023',
    category: 'Waterfront Leasing'
  }, {
    id: 5,
    title: 'Different Types of Granite and Their Applications in Construction',
    excerpt: 'An overview of various granite types, their characteristics, and ideal applications in construction and landscaping projects.',
    content: 'Granite is a versatile natural stone that comes in various types, each with unique characteristics that make them suitable for different construction and landscaping applications. Black granite, known for its strength and durability, is ideal for high-traffic areas and outdoor applications. Red granite, with its warm tones, is often used for decorative elements and countertops. Gray granite provides a neutral option that complements many design schemes and is commonly used for building facades and flooring. The size of granite aggregates also determines their application – larger sizes (3/4 inch and above) are typically used for road base and drainage, while smaller sizes (1/2 inch and below) are preferred for concrete mixing and finer applications. At Aleze Global, we supply a range of granite types and sizes to meet the specific requirements of your construction or landscaping project.',
    image: 'https://images.unsplash.com/photo-1635770647357-3a2e9c596f52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'David Okonkwo',
    date: 'October 12, 2023',
    category: 'Construction Materials'
  }, {
    id: 6,
    title: 'The Role of Dredging in Coastal Development and Erosion Control',
    excerpt: 'How strategic dredging operations can help in beach nourishment, land reclamation, and protecting coastal areas from erosion.',
    content: 'Dredging plays a crucial role in coastal development and erosion control, offering solutions for beach nourishment, land reclamation, and shoreline protection. Through strategic dredging operations, sand and sediment can be relocated to replenish eroded beaches, creating wider shorelines that serve as natural buffers against storm surges and waves. Dredging is also essential for land reclamation projects, creating new usable land for development in coastal areas where space is limited. Additionally, dredging helps maintain navigational channels, ensuring safe passage for vessels while also managing sediment accumulation that can exacerbate flooding and erosion issues. At Aleze Global, our dredging services incorporate modern techniques and equipment to effectively support coastal development while minimizing environmental impact and promoting long-term sustainability of coastal ecosystems.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'Chioma Nwosu',
    date: 'November 8, 2023',
    category: 'Dredging'
  }];
  const filteredPosts = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase())).filter(post => selectedCategory === 'all' || post.category === selectedCategory);
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const openBlogPost = (id: number) => {
    setSelectedPost(id);
  };
  const closeBlogPost = () => {
    setSelectedPost(null);
  };
  const getSelectedPost = () => {
    return blogPosts.find(post => post.id === selectedPost);
  };
  return <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & News</h1>
            <p className="text-xl text-gray-200">
              Stay updated with the latest insights, trends, and news from the
              dredging and construction materials industry.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search and Filter Bar */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-grow relative">
                  <input type="text" placeholder="Search articles..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                  {categories.map((category, index) => <option key={index} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>)}
                </select>
              </div>
              {filteredPosts.length > 0 ? <div className="space-y-12">
                  {filteredPosts.map((post, index) => <motion.div key={post.id} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="group cursor-pointer" onClick={() => openBlogPost(post.id)}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <div className="h-60 md:h-full overflow-hidden rounded-lg">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </span>
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </span>
                            <span className="flex items-center">
                              <Tag className="w-4 h-4 mr-1" />
                              {post.category}
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <button className="text-primary font-medium flex items-center group-hover:text-primary-dark transition-colors">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>)}
                </div> : <div className="text-center py-12">
                  <p className="text-gray-600">
                    No blog posts found matching your search criteria.
                  </p>
                </div>}
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.filter(category => category !== 'all').map((category, index) => <li key={index}>
                        <button onClick={() => setSelectedCategory(category)} className={`flex items-center justify-between w-full text-left py-2 px-3 rounded-md transition-colors ${selectedCategory === category ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}>
                          <span>{category}</span>
                          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
                            {blogPosts.filter(post => post.category === category).length}
                          </span>
                        </button>
                      </li>)}
                </ul>
              </div>
              {/* Recent Posts */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => <li key={index} className="flex gap-3">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-md" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm hover:text-primary transition-colors cursor-pointer" onClick={() => openBlogPost(post.id)}>
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.date}
                        </p>
                      </div>
                    </li>)}
                </ul>
              </div>
              {/* Contact Info */}
              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Need Assistance?</h3>
                <p className="mb-4">
                  Contact our team for inquiries about our services or to
                  request a quote.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:08180086527" className="hover:text-accent transition-colors">
                      08180086527
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:alezeglobalconcept56@gmail.com" className="hover:text-accent transition-colors break-all">
                      alezeglobalconcept56@gmail.com
                    </a>
                  </div>
                </div>
                <a href="/contact" className="block mt-6 bg-accent text-white text-center py-2 rounded-md hover:bg-accent-dark transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Post Modal */}
      {selectedPost !== null && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closeBlogPost}>
          <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            {getSelectedPost() && <>
                <div className="relative h-80">
                  <img src={getSelectedPost()?.image} alt={getSelectedPost()?.title} className="w-full h-full object-cover" />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors" onClick={closeBlogPost}>
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {getSelectedPost()?.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {getSelectedPost()?.author}
                    </span>
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {getSelectedPost()?.category}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold mb-6">
                    {getSelectedPost()?.title}
                  </h1>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {getSelectedPost()?.content}
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">
                      Share this article
                    </h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-[#3b5998] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#1da1f2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#0077b5] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </>}
          </motion.div>
        </motion.div>}
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Stay updated with our latest news, industry insights, and
                special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};