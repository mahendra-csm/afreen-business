import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface Member {
  name: string;
  image: string;
  role?: string;
  department?: string;
  university?: string;
  country: string;
}

const members: Member[] = [
  { name: "Dr. Ahmed M. Saqr", image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Ahmed-Shaqr.jpg", role: "Visiting Lecturer and Researcher", department: "Engineering and Applied Sciences", university: "Cologne University of Applied Sciences (TH Köln)", country: "Germany" },
  { name: "Dr. Bishnu Pada Bose", image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Bishnu.jpg", role: "Professor, Partner & Advisor", department: "Civil & Environmental Engineering", university: "Invosystems", country: "Singapore" },
  { name: "Dr. Chintan Patel", image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Chintan-Patel.jpg", role: "Assistant Professor", department: "Electrical Engineering", university: "CVM University", country: "India" },
  { name: "Dr. Hadi Erfani", image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Hadi-Erfani.jpg", role: "Research Scholar", department: "Chemical Engineering", university: "Islamic Azad University (Central Tehran Branch)", country: "Iran" },
  { name: "Dr. S. Satish", image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-S.-Satish.jpg", role: "Associate Professor", department: "School of Aeronautical Sciences", university: "Hindustan Institute of Technology and Science (HITS)", country: "India" },
  { name: "Dr. Subhash", image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Subhash.jpg", role: "Associate Professor & Head of Department", department: "Geomatics Engineering", university: "Kathmandu University", country: "Nepal" },
  { name: "Dr. Sudarshan Rao K", image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-SUDARSHAN-RAO-MECH.jpg", role: "Professor", department: "Mechanical Engineering", university: "SMVITM Bantakal", country: "India" },
  { name: "Dr. Nalanda Roy", image: "https://onegrasp.com/wp-content/uploads/2025/10/Nalanda-Roy.jpg", role: "Full Professor / Coordinator, Asian Studies Program", department: "Political Science and International Studies", university: "Georgia Southern University", country: "USA" },
  { name: "Dr. Nilesh Charankar", image: "https://onegrasp.com/wp-content/uploads/2025/10/1-10.jpg", role: "Lead Full-Stack Developer / Researcher / Author", department: "Technology / Software Engineering", university: "Industry Professional", country: "USA" },
  { name: "Dr. Sai Suman Singamsetty", image: "https://onegrasp.com/wp-content/uploads/2025/10/2-10.jpg", role: "Data Management Specialist / Keynote Speaker", department: "Electronics & Communication Engineering", university: "Centurion University of Technology and Management", country: "India" },
  { name: "Secretary — ICOH Scientific Committee", image: "https://onegrasp.com/wp-content/uploads/2025/10/3-10.jpg", role: "Secretary", department: "Occupational Health / Nanotechnology", university: "Universidad Nacional de la Patagonia San Juan Bosco", country: "Argentina" },
  { name: "Professor / Program Coordinator", image: "https://onegrasp.com/wp-content/uploads/2025/10/4-10.jpg", role: "Professor / Program Coordinator", department: "MCA Department", university: "Acharya Bangalore B School", country: "India" },
  { name: "Professor — CS & Engineering", image: "https://onegrasp.com/wp-content/uploads/2025/10/5-10.jpg", role: "Professor", department: "Computer Science & Engineering", university: "Nirma University, Ahmedabad", country: "India" },
  { name: "Principal / Professor", image: "https://onegrasp.com/wp-content/uploads/2025/10/6-10.jpg", role: "Principal / Professor", department: "Computer Science & Engineering", university: "Walchand Institute of Technology (Autonomous)", country: "India" },
  { name: "Dr. Maha Fawzy Anber", image: "https://onegrasp.com/wp-content/uploads/2025/10/7-10.jpg", role: "Head of Sustainability Department / Associate Professor", department: "Architecture", university: "El Shorouk Academy, Cairo", country: "Egypt" },
  { name: "Prof. D.K. Chaturvedi", image: "https://onegrasp.com/wp-content/uploads/2025/10/8-10.jpg", role: "Dean, Faculty of Engineering", department: "Engineering", university: "Dayalbagh Educational Institute", country: "India" },
  { name: "Dr. Praneetha Kotla", image: "https://onegrasp.com/wp-content/uploads/2025/10/Untitled-design-5.jpg", role: "Associate Principal / Lead Full-Stack Developer", department: "Technology", university: "Associated with Northern Illinois University", country: "USA" },
  { name: "Dr. Bright Keswani", image: "https://onegrasp.com/wp-content/uploads/2025/10/BRIGHT-KESWANI.jpeg", role: "Professor", department: "Computer Science & Engineering", university: "Poornima University, Jaipur", country: "India" },
];

const ScientificCommittee = () => {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  const countries = useMemo(() => [...new Set(members.map((m) => m.country))].sort(), []);

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const q = search.toLowerCase();
      const matchSearch = !q || m.name.toLowerCase().includes(q) || (m.university?.toLowerCase().includes(q)) || m.country.toLowerCase().includes(q);
      const matchCountry = !countryFilter || m.country === countryFilter;
      return matchSearch && matchCountry;
    });
  }, [search, countryFilter]);

  return (
    <section id="committee" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[42px] font-heading font-bold text-foreground mb-3">
            Meet Our Scientific Committee
          </h2>
          <p className="text-lg text-muted-foreground">Global Experts Guiding Our Conferences</p>
        </motion.div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search committee members"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-full border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="h-12 px-4 rounded-full border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary min-w-[200px]"
          >
            <option value="">Filter by Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {filtered.map((m, i) => (
            <motion.div
              key={m.name + i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.05 }}
              className="group bg-card rounded-[18px] p-7 shadow-card text-center hover:-translate-y-2 hover:shadow-sky-glow transition-all duration-300"
            >
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                className="w-[120px] h-[120px] rounded-full object-cover mx-auto border-4 border-sky-light/20 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="font-heading font-bold text-xl text-foreground mt-[18px]">{m.name}</h3>
              {m.role && <p className="text-sm font-semibold text-primary mt-1">{m.role}</p>}
              {m.department && <p className="text-sm text-muted-foreground mt-1">{m.department}</p>}
              {m.university && <p className="text-sm text-foreground/70 mt-1">{m.university}</p>}
              <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                {m.country}
              </span>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No committee members found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default ScientificCommittee;
