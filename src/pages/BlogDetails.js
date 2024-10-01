import React from 'react';
import { useParams } from 'react-router-dom';

const blogContent = {
  1: {
    title: 'Emergency Preparedness 101',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP7f_LbdspyV6gQEUt-B1orj1hO90_DGaqg&s',
    content: `
      <p>Emergency preparedness is crucial for ensuring safety and survival during unexpected events. This guide provides an overview of the essential steps to prepare for emergencies. Knowing how to act in a crisis can make a significant difference in maintaining safety and managing stress.</p>
      <p>Start by identifying potential emergencies that could affect your area, such as natural disasters, health crises, or man-made incidents. Develop a comprehensive emergency plan that includes communication strategies, evacuation routes, and a designated meeting point. Regularly review and practice your plan to ensure everyone in your household is familiar with it.</p>
      <p>Assemble a well-stocked disaster kit with essential supplies like water, non-perishable food, first aid items, and important documents. Store the kit in an easily accessible location and ensure it is updated periodically to replace expired items and add new essentials as needed.</p>
    `
  },
  2: {
    title: 'Understanding First Aid',
    image: 'https://dattmedi.com/blog/wp-content/uploads/2024/05/Understanding-the-basics-of-First-Aid-1024x769.webp',
    content: `
      <p>First aid involves the initial assistance given to someone who is injured or ill until professional medical help is available. Mastering basic first aid techniques can be invaluable in emergencies, helping to stabilize conditions and prevent further harm.</p>
      <p>Key first aid skills include performing CPR, managing wounds, treating burns, and responding to choking incidents. It's important to understand how to assess and prioritize injuries effectively. Taking a certified first aid course will provide hands-on experience and increase your confidence in handling medical emergencies.</p>
      <p>Keep a well-stocked first aid kit at home and in your car. Ensure it contains items like bandages, antiseptics, medications, and a first aid manual. Familiarize yourself with the kit’s contents and how to use each item. Regularly check and restock the kit to keep it ready for any emergency.</p>
    `
  },
  3: {
    title: 'How to Build a Disaster Kit',
    image: 'https://www.redcross.org/content/dam/redcross/about-us/news/getakitfb.jpg.transform/1288/q70/feature/image.jpeg',
    content: `
      <p>A disaster kit is a collection of essential supplies that can help you survive during and after an emergency. Building a comprehensive disaster kit is an important step in emergency preparedness and can provide peace of mind during uncertain situations.</p>
      <p>Begin by including basic items such as water, non-perishable food, a flashlight, batteries, and a first aid kit. Tailor the kit to your specific needs by adding items like medications, baby supplies, and pet food. Store these supplies in a durable, waterproof container that is easy to transport.</p>
      <p>Regularly review and update your disaster kit to ensure it remains relevant and effective. Check expiration dates on food and medications, and replace any used or outdated items. Keep the kit in an easily accessible location and make sure all family members know where it is stored.</p>
    `
  },
  4: {
    title: 'Emergency Communication Plans',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi0Za3xUqm_T7PqAI16D1dA-dUbs0ISzDeLZhcN0vjo74-X5vciF9K-J8peTw2kf8iFw&usqp=CAU',
    content: `
      <p>Creating an effective emergency communication plan is vital for ensuring that you and your family can stay in touch during a crisis. A well-thought-out plan helps you coordinate with others, share important information, and make timely decisions.</p>
      <p>Start by identifying all possible communication methods, including phone calls, text messages, and social media. Establish a primary and backup method of communication in case one fails. Designate a central contact person who can relay information between family members if separated.</p>
      <p>Develop a list of important phone numbers, including emergency services, family members, and neighbors. Ensure that everyone in your household is aware of the communication plan and practices it regularly. Update the plan as needed based on changes in contact information or communication methods.</p>
    `
  },
  5: {
    title: 'Dealing with Natural Disasters',
    image: 'https://buildersproject.eu/assets/content/attachments/1.jpg',
    content: `
      <p>Natural disasters can strike with little warning, causing significant damage and disruption. Preparing for and responding to natural disasters involves understanding the types of disasters that are common in your area and having a plan to mitigate their impact.</p>
      <p>Educate yourself about the specific risks in your region, such as hurricanes, earthquakes, or wildfires. Create a family emergency plan that includes evacuation routes, safe locations, and emergency contacts. Assemble an emergency kit with necessary supplies and keep it readily accessible.</p>
      <p>During a natural disaster, stay informed through reliable sources such as weather alerts or emergency services. Follow safety guidelines and instructions from authorities to protect yourself and your loved ones. After the disaster, assess the damage, seek help if needed, and review your emergency plan to improve future preparedness.</p>
    `
  },
  6: {
    title: 'Sheltering in Place',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcziJ6AJrJijTNuyUYIqcqUu5x8RbWjVDuGw&s',
    content: `
      <p>Sheltering in place means staying indoors during an emergency situation, rather than evacuating. This approach is often used during incidents like chemical spills, active shooter situations, or severe weather events.</p>
      <p>To shelter in place effectively, identify a safe room or area in your home that offers the best protection from the threat. Ensure that the room is stocked with necessary supplies, such as food, water, medications, and a communication device. Seal windows and doors if necessary to prevent contaminants from entering.</p>
      <p>Stay informed about the situation through reliable sources and follow any instructions from authorities. Remain in the safe room until the threat has passed or it is deemed safe to leave. Once the situation is under control, assess any potential damage and take appropriate actions based on guidance from emergency services.</p>
    `
  },
  7: {
    title: 'Evacuation Procedures',
    image: 'https://www.shutterstock.com/image-vector/emergency-evacuation-victims-natural-disasters-260nw-1659221965.jpg',
    content: `
      <p>Evacuation procedures are critical for ensuring safety when you need to leave an area due to an emergency. Proper planning and execution of evacuation procedures can help you avoid confusion and increase the chances of a safe departure.</p>
      <p>Start by knowing the evacuation routes and procedures specific to your location. Plan multiple routes in case one becomes inaccessible. Prepare an emergency kit with essential items, and ensure that all family members are aware of the plan and know what to do.</p>
      <p>During evacuation, follow instructions from authorities and avoid using elevators. If you have pets or special needs, make arrangements in advance for their care. Once you reach a safe location, account for all family members and stay informed about the situation through reliable sources.</p>
    `
  },
  8: {
    title: 'Emergency Medical Supplies',
    image: 'https://img.freepik.com/free-vector/first-aid-kit-supply-equipment-compositions-emergency-medical-treatment-realistic-cards-set_1284-27385.jpg',
    content: `
      <p>Emergency medical supplies are essential for treating injuries and health issues during a crisis. Having a well-stocked supply of medical items can help you manage emergencies effectively and provide immediate care.</p>
      <p>Key items to include in your emergency medical supplies are first aid kits, medications, bandages, antiseptics, and medical gloves. Ensure that your kit is tailored to your specific needs, including any prescription medications or special items required by family members.</p>
      <p>Store your medical supplies in an easily accessible location and regularly check the contents to ensure they are up-to-date and in good condition. Familiarize yourself with the proper use of each item and consider taking a first aid course to enhance your skills and confidence in handling medical emergencies.</p>
    `
  },
  9: {
    title: 'Preparing Your Family',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgfuS-qiX7eqOfdlhiR0koSjnqMjTUBTsHQ&s',
    content: `
      <p>Preparing your family for emergencies involves creating a comprehensive plan and ensuring that everyone understands their role and responsibilities. Effective family preparedness can enhance safety and reduce anxiety during crises.</p>
      <p>Begin by discussing potential emergencies with your family and developing a plan that includes evacuation routes, communication strategies, and a meeting point. Ensure that everyone knows how to access emergency supplies and understand basic safety procedures.</p>
      <p>Regularly practice emergency drills and review the plan to address any changes in circumstances or contact information. Encourage open communication about emergency preparedness and make sure that all family members feel confident and informed about the plan.</p>
    `
  },
  10: {
    title: 'Post-Emergency Recovery',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLt90rX64jcN3x0-mNceH_GnyGzRm9-udrA&usqp=CAU',
    content: `
      <p>Post-emergency recovery is a critical phase that involves addressing the aftermath of an emergency and working towards restoring normalcy. Effective recovery efforts can help individuals and communities rebuild and recover more efficiently.</p>
      <p>Start by assessing the damage and determining immediate needs such as medical care, temporary shelter, or financial assistance. Work with local authorities and relief organizations to access available resources and support.</p>
      <p>Engage in community recovery efforts and support each other during the rebuilding process. Review and update your emergency plans based on lessons learned from the event. Focus on mental health and well-being, seeking professional help if needed, and stay informed about available recovery resources.</p>
    `
  },
  11: {
    title: 'Emergency Evacuation Plans',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfnLzZ6W4aQ9J4m2Oq0eSmOdYRmI1i-ikFIzrWn2RBWdx64Wlpafz-TQyP1JOCmF37Vs&usqp=CAU',
    content: `
      <p>Emergency evacuation plans are crucial for ensuring the safety of individuals during emergencies that require leaving an area quickly. A well-thought-out evacuation plan helps you navigate through the chaos and reach safety efficiently.</p>
      <p>Develop a clear and concise evacuation plan that includes primary and secondary routes out of your home or workplace. Identify safe locations and establish meeting points where everyone can regroup. Ensure that all family members or colleagues are familiar with the plan and practice evacuation drills regularly.</p>
      <p>Prepare an evacuation kit with essential items such as medications, important documents, and emergency contact information. Make sure to account for any special needs or accommodations required for individuals in your group. Stay informed about potential emergencies and review your plan periodically to make necessary updates.</p>
    `
  },
  12: {
    title: 'Handling Power Outages',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1R8FqTYe4g5-Vl-LfwA4rKTx2SY7H4Ebl5XvErpVX5tupmYXPmL8l4xEBcv6kOwQU9jE&usqp=CAU',
    content: `
      <p>Power outages can disrupt daily routines and pose safety risks. Knowing how to handle power outages effectively can help you manage the situation and minimize any inconvenience.</p>
      <p>Start by ensuring that you have a reliable backup power source, such as a generator or battery-operated devices. Keep flashlights, batteries, and candles readily available for use during an outage. Avoid using candles in confined spaces to prevent fire hazards.</p>
      <p>Keep your refrigerator and freezer doors closed to preserve food during an outage. If the power is out for an extended period, monitor the situation through battery-operated radios or other sources of information. Report outages to your utility company and follow their instructions for safety.</p>
    `
  },
  13: {
    title: 'Responding to Severe Weather',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qT3GRXJw7zB0K0s7e_O2gXvsU_eCbiVw5u3zoCZU1nRbl5sp63FauTdb-PS6q_8bWCE&usqp=CAU',
    content: `
      <p>Severe weather events such as thunderstorms, tornadoes, and hurricanes can cause significant damage and pose serious threats to safety. Understanding how to respond to severe weather is essential for minimizing risks and staying safe.</p>
      <p>Monitor weather alerts and warnings from reliable sources to stay informed about approaching severe weather. If severe weather is imminent, seek shelter in a safe location, such as a basement or interior room away from windows. Avoid using electrical appliances and stay indoors until the threat has passed.</p>
      <p>After the severe weather has passed, inspect your property for damage and report any hazards to local authorities. Be cautious of downed power lines and other potential dangers. Follow any guidance from emergency services and stay informed about recovery efforts.</p>
    `
  },
  14: {
    title: 'Preparing for Chemical Emergencies',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-M_FlO_YlZBzQPHuTc7mvlpWZTQbU3MTcKwZZQz_eVQy3F2KLN4W0TkYW-L8LkH2Gzg&usqp=CAU',
    content: `
      <p>Chemical emergencies, such as spills or leaks, can pose serious health risks and require immediate action to protect yourself and others. Knowing how to prepare for and respond to chemical emergencies is crucial for safety.</p>
      <p>Identify potential sources of chemical hazards in your area and be aware of the specific risks associated with them. Create a plan for responding to chemical emergencies, including steps for evacuation and decontamination. Ensure that you have access to protective equipment such as masks, gloves, and eye protection.</p>
      <p>In the event of a chemical emergency, follow instructions from authorities and take appropriate protective measures. Seek medical attention if exposed to hazardous chemicals and report the incident to local emergency services. Stay informed about the situation and follow any guidance for recovery and cleanup.</p>
    `
  },
  15: {
    title: 'Community Emergency Response',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xtfh6mrlkW7n3HkD8SKx1-JJxq9T3aQ1sPVZXEB-9tG_7Lt8WyJ3b8NePOeYZZ3XUdg&usqp=CAU',
    content: `
      <p>Community emergency response involves collective efforts to address emergencies and support affected individuals. Effective community response can enhance safety, provide resources, and promote recovery during and after emergencies.</p>
      <p>Establish community emergency response teams and coordinate with local organizations to develop a response plan. Conduct training and drills to prepare for various emergency scenarios and ensure that team members are familiar with their roles and responsibilities.</p>
      <p>Engage with the community to raise awareness about emergency preparedness and response. Share information about available resources, such as shelters and support services, and encourage community members to participate in preparedness activities. Foster a culture of collaboration and support to enhance overall resilience and response capabilities.</p>
    `
  }
};

const blogDetailsStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '20px auto'
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#333'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  content: {
    fontSize: '1.2em',
    color: '#666',
    lineHeight: '1.6',
    textAlign: 'justify'
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogContent[id];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div style={blogDetailsStyles.container}>
      <h1 style={blogDetailsStyles.title}>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={blogDetailsStyles.image} />
      <div style={blogDetailsStyles.content} dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetails;
