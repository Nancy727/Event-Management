import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Image, Layers, LogOut, Plus, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ContactInquiry, PortfolioMedia, ServiceItem } from '../types';
import { apiService } from '../services/api';
import { SintuBrandLogo } from '../components/common/SintuBrandLogo';

export const AdminDashboardPage: React.FC = () => {
  const { admin, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'inquiries' | 'portfolio' | 'services'>('inquiries');
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([
    {
      id: 'msg-1',
      name: 'Rohan Verma',
      phone: '+91 9876543210',
      email: 'rohan.verma@gmail.com',
      eventType: 'Moderate Wedding + Catering',
      eventDate: '2026-11-15',
      guestCount: 500,
      location: 'Jamalpur',
      message: 'Looking for royal mandap decor, flower pathway, German tent setup, and 15-item buffet catering for 500 guests.',
      status: 'NEW',
      createdAt: '2026-08-01',
    },
  ]);
  const [portfolioList, setPortfolioList] = useState<PortfolioMedia[]>([]);
  const [servicesList, setServicesList] = useState<ServiceItem[]>([]);

  const [newPortfolio, setNewPortfolio] = useState({
    title: '',
    categoryId: 'wedding',
    mediaType: 'IMAGE' as 'IMAGE' | 'VIDEO',
    mediaUrl: '',
    location: 'Jamalpur, Munger',
    description: '',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }
    apiService.getPortfolio().then(setPortfolioList);
    apiService.getServices().then(setServicesList);
  }, [isAuthenticated, navigate]);

  const handleAddPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPortfolio.title || !newPortfolio.mediaUrl) return;

    const created: PortfolioMedia = {
      id: `p-${Date.now()}`,
      ...newPortfolio,
    };
    setPortfolioList([created, ...portfolioList]);
    setNewPortfolio({
      title: '',
      categoryId: 'wedding',
      mediaType: 'IMAGE',
      mediaUrl: '',
      location: 'Jamalpur, Munger',
      description: '',
    });
  };

  const handleDeletePortfolio = (id: string) => {
    setPortfolioList(portfolioList.filter((item) => item.id !== id));
  };

  const handleUpdateStatus = (id: string, newStatus: any) => {
    setInquiries(
      inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  return (
    <div className="pt-24 pb-20 bg-white text-olive-700 min-h-screen font-sans">
      {/* Top Admin Navigation Header */}
      <div className="bg-olive-50 border-b border-olive-200 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SintuBrandLogo size="sm" />
            <span className="text-xs text-rose-700 font-extrabold uppercase tracking-widest pl-4 border-l border-olive-200">
              Admin Portal • {admin?.name || 'Sintu Kumar'}
            </span>
          </div>

          <button
            onClick={() => {
              logout();
              navigate('/admin/login');
            }}
            className="px-4 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-md"
          >
            <LogOut className="w-4 h-4 text-white" />
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-3 border-b border-olive-200 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all ${
              activeTab === 'inquiries'
                ? 'bg-olive-700 text-white shadow-md'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <MessageSquare className="w-5 h-5 text-current" />
            Customer Inquiries ({inquiries.length})
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all ${
              activeTab === 'portfolio'
                ? 'bg-olive-700 text-white shadow-md'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <Image className="w-5 h-5 text-current" />
            Portfolio Media ({portfolioList.length})
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all ${
              activeTab === 'services'
                ? 'bg-olive-700 text-white shadow-md'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <Layers className="w-5 h-5 text-current" />
            Services ({servicesList.length})
          </button>
        </div>

        {/* TAB 1: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-normal text-olive-700">Incoming Event & Catering Inquiries</h2>
            <div className="grid grid-cols-1 gap-4">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-6 rounded-3xl bg-rose-50 border border-rose-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm uppercase tracking-wider text-olive-700">{inq.name}</span>
                      <span className="px-3 py-1 rounded-full bg-rose-700 text-white font-bold text-[10px] uppercase border border-rose-800">
                        {inq.eventType}
                      </span>
                      <span className="text-xs text-olive-600 font-medium">Date: {inq.eventDate || 'TBD'}</span>
                    </div>
                    <p className="text-xs text-olive-600 font-light">
                      <strong>Phone:</strong> {inq.phone} | <strong>Location:</strong> {inq.location} | <strong>Guests:</strong> {inq.guestCount}
                    </p>
                    <p className="text-xs text-olive-700 italic bg-white p-3.5 rounded-2xl border border-rose-200">
                      "{inq.message}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <select
                      value={inq.status}
                      onChange={(e) => handleUpdateStatus(inq.id!, e.target.value)}
                      className="px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-rose-700 font-bold focus:outline-none"
                    >
                      <option value="NEW">Status: NEW</option>
                      <option value="CONTACTED">Status: CONTACTED</option>
                      <option value="BOOKED">Status: BOOKED</option>
                      <option value="ARCHIVED">Status: ARCHIVED</option>
                    </select>

                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(inq.name)},%20this%20is%20Sintu%20Decorators%20regarding%20your%20inquiry.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest shadow-sm flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4 text-white" />
                      Reply WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PORTFOLIO MANAGER */}
        {activeTab === 'portfolio' && (
          <div className="space-y-8">
            <div className="p-6 rounded-3xl bg-olive-50 border border-olive-200 shadow-sm">
              <h3 className="font-serif text-lg font-normal text-rose-700 mb-4 flex items-center gap-2">
                <Plus className="w-6 h-6 text-rose-700" /> Add New Photo / Video to Gallery
              </h3>
              <form onSubmit={handleAddPortfolio} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Title (e.g. Royal Mandap Bari Daryapur)"
                  value={newPortfolio.title}
                  onChange={(e) => setNewPortfolio({ ...newPortfolio, title: e.target.value })}
                  className="px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-olive-700 font-medium"
                />

                <input
                  type="url"
                  required
                  placeholder="Image URL"
                  value={newPortfolio.mediaUrl}
                  onChange={(e) => setNewPortfolio({ ...newPortfolio, mediaUrl: e.target.value })}
                  className="px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-olive-700 font-medium"
                />

                <select
                  value={newPortfolio.categoryId}
                  onChange={(e) => setNewPortfolio({ ...newPortfolio, categoryId: e.target.value })}
                  className="px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-olive-700 font-bold"
                >
                  <option value="wedding">Wedding & Mandap</option>
                  <option value="stage-reception">Reception Stage</option>
                  <option value="flower-decor">Flower Styling</option>
                  <option value="tent-house">Tent House</option>
                  <option value="birthday">Birthday Party</option>
                </select>

                <button
                  type="submit"
                  className="py-2.5 px-4 rounded-xl bg-olive-700 text-white font-bold text-xs uppercase tracking-widest hover:bg-rose-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4 text-white" />
                  Publish Asset
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {portfolioList.map((item) => (
                <div key={item.id} className="relative rounded-3xl overflow-hidden border border-olive-200 bg-white shadow-sm group h-64">
                  <img src={item.mediaUrl} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-700/90 via-transparent to-transparent p-4 flex flex-col justify-between">
                    <button
                      onClick={() => handleDeletePortfolio(item.id)}
                      className="self-end p-2 rounded-full bg-rose-700 text-white hover:bg-rose-800 transition-colors shadow-md border border-rose-800"
                    >
                      <Trash2 className="w-5 h-5 text-white" />
                    </button>
                    <div>
                      <p className="text-[10px] text-rose-200 font-bold uppercase tracking-widest">{item.location}</p>
                      <h4 className="font-serif text-sm font-normal text-white leading-tight">{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SERVICES MANAGER */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-normal text-olive-700">Active Service Offerings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {servicesList.map((serv) => (
                <div key={serv.id} className="p-6 rounded-3xl bg-rose-50 border border-rose-200 shadow-sm space-y-3">
                  <img src={serv.imageUrl} alt={serv.title} className="w-full h-36 object-cover rounded-2xl" />
                  <h4 className="font-serif text-base font-normal text-olive-700">{serv.title}</h4>
                  <p className="text-xs text-olive-600 line-clamp-2 font-light">{serv.shortDesc}</p>
                  <p className="text-[11px] text-olive-600 font-bold uppercase tracking-wider">Custom Quote via Calculator</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
