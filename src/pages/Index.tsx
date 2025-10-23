import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [extensionName, setExtensionName] = useState('');
  const [extensionDescription, setExtensionDescription] = useState('');

  const extensions = [
    {
      id: 1,
      name: 'Speed Boost',
      description: 'Увеличивает скорость персонажа в 2 раза',
      downloads: 1234,
      icon: '⚡',
      category: 'Gameplay'
    },
    {
      id: 2,
      name: 'Custom UI Pack',
      description: 'Набор стильных интерфейсов для игры',
      downloads: 892,
      icon: '🎨',
      category: 'UI'
    },
    {
      id: 3,
      name: 'Auto Farm',
      description: 'Автоматизация фарминга ресурсов',
      downloads: 2156,
      icon: '🤖',
      category: 'Automation'
    },
    {
      id: 4,
      name: 'Sound Effects+',
      description: 'Дополнительные звуковые эффекты',
      downloads: 567,
      icon: '🔊',
      category: 'Audio'
    },
    {
      id: 5,
      name: 'Teleport Pro',
      description: 'Быстрая телепортация по карте',
      downloads: 3421,
      icon: '🚀',
      category: 'Gameplay'
    },
    {
      id: 6,
      name: 'Particles Master',
      description: 'Продвинутая система частиц',
      downloads: 721,
      icon: '✨',
      category: 'Effects'
    }
  ];

  const categories = ['Все', 'Gameplay', 'UI', 'Automation', 'Audio', 'Effects'];
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredExtensions = selectedCategory === 'Все' 
    ? extensions 
    : extensions.filter(ext => ext.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-red-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E74856] to-[#00A2FF] rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                R
              </div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-[#E74856] to-[#00A2FF] bg-clip-text text-transparent">
                ROBLOX EXTENSIONS
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'home' 
                    ? 'bg-[#E74856] text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name="Home" size={20} />
                Главная
              </button>
              <button
                onClick={() => setActiveTab('create')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'create' 
                    ? 'bg-[#E74856] text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name="Plus" size={20} />
                Создать
              </button>
              <button
                onClick={() => setActiveTab('catalog')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'catalog' 
                    ? 'bg-[#E74856] text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name="Grid3x3" size={20} />
                Каталог
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <div className="inline-block mb-6 animate-float">
                <div className="w-24 h-24 bg-gradient-to-br from-[#E74856] via-[#00A2FF] to-[#FFD700] rounded-2xl flex items-center justify-center text-white text-5xl shadow-2xl">
                  🎮
                </div>
              </div>
              <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-[#E74856] via-[#00A2FF] to-[#FFD700] bg-clip-text text-transparent">
                Создавай расширения для Roblox
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Платформа для разработки, публикации и загрузки расширений для твоих любимых игр в Roblox
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#E74856] hover:bg-[#d13a48] text-white font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  onClick={() => setActiveTab('create')}
                >
                  <Icon name="Rocket" size={24} className="mr-2" />
                  Начать создавать
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#00A2FF] text-[#00A2FF] hover:bg-[#00A2FF] hover:text-white font-bold text-lg px-8 py-6 transition-all hover:scale-105"
                  onClick={() => setActiveTab('catalog')}
                >
                  <Icon name="Search" size={24} className="mr-2" />
                  Смотреть каталог
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-gray-200 hover:border-[#E74856] transition-all hover:shadow-xl hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E74856] to-[#d13a48] rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                    <Icon name="Code" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Простая разработка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Интуитивный редактор кода с подсветкой синтаксиса и автодополнением
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-[#00A2FF] transition-all hover:shadow-xl hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00A2FF] to-[#0091e6] rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                    <Icon name="Zap" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Мгновенная публикация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Опубликуй своё расширение одним кликом и делись с сообществом
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-[#FFD700] transition-all hover:shadow-xl hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#e6c200] rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                    <Icon name="Users" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Активное сообщество</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Тысячи разработчиков создают и делятся расширениями каждый день
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-[#E74856] to-[#00A2FF] rounded-2xl p-12 text-white text-center shadow-2xl">
              <h3 className="text-4xl font-black mb-4">Готов начать?</h3>
              <p className="text-xl mb-6 opacity-90">
                Присоединяйся к сообществу создателей расширений для Roblox
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#E74856] hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-xl hover:scale-105 transition-all"
                onClick={() => setActiveTab('create')}
              >
                Создать первое расширение
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-[#E74856] to-[#00A2FF] bg-clip-text text-transparent">
                Создать расширение
              </h2>
              <p className="text-xl text-gray-600">
                Заполни информацию о твоём расширении и начни разработку
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Card className="border-2 border-gray-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Информация о расширении</CardTitle>
                    <CardDescription>Основные данные твоего проекта</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Название расширения
                      </label>
                      <Input
                        placeholder="Например: Super Jump Mod"
                        value={extensionName}
                        onChange={(e) => setExtensionName(e.target.value)}
                        className="border-2 border-gray-200 focus:border-[#E74856] text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Описание
                      </label>
                      <Textarea
                        placeholder="Опиши, что делает твоё расширение..."
                        value={extensionDescription}
                        onChange={(e) => setExtensionDescription(e.target.value)}
                        className="border-2 border-gray-200 focus:border-[#E74856] min-h-32"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Категория
                      </label>
                      <select className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-[#E74856] focus:outline-none text-lg">
                        <option>Gameplay</option>
                        <option>UI</option>
                        <option>Automation</option>
                        <option>Audio</option>
                        <option>Effects</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Иконка (emoji)
                      </label>
                      <Input
                        placeholder="🎮"
                        className="border-2 border-gray-200 focus:border-[#E74856] text-4xl text-center"
                        maxLength={2}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-[#E74856] hover:bg-[#d13a48] text-white font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Icon name="Rocket" size={20} className="mr-2" />
                      Создать расширение
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card className="border-2 border-[#00A2FF] shadow-xl bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Предпросмотр</CardTitle>
                    <CardDescription>Так будет выглядеть твоё расширение</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white border-2 border-[#00A2FF] rounded-xl p-6 shadow-lg">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#E74856] to-[#00A2FF] rounded-xl flex items-center justify-center text-4xl shadow-lg">
                          🎮
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-black text-gray-800 mb-2">
                            {extensionName || 'Название расширения'}
                          </h3>
                          <div className="flex gap-2">
                            <Badge className="bg-[#E74856] text-white">Gameplay</Badge>
                            <Badge variant="outline" className="border-[#00A2FF] text-[#00A2FF]">
                              <Icon name="Download" size={14} className="mr-1" />
                              0
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {extensionDescription || 'Описание расширения появится здесь...'}
                      </p>
                      <Button className="w-full bg-[#00A2FF] hover:bg-[#0091e6] text-white font-bold">
                        <Icon name="Download" size={20} className="mr-2" />
                        Скачать
                      </Button>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 border-2 border-[#FFD700] rounded-lg">
                      <div className="flex gap-2 text-yellow-800">
                        <Icon name="Lightbulb" size={20} className="flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold mb-1">Совет</p>
                          <p className="text-sm">
                            Используй понятное название и подробное описание, чтобы больше людей нашли твоё расширение!
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-[#E74856] to-[#00A2FF] bg-clip-text text-transparent">
                Каталог расширений
              </h2>
              <p className="text-xl text-gray-600">
                Исследуй тысячи расширений от сообщества
              </p>
            </div>

            <div className="mb-8 flex gap-4 items-center flex-wrap">
              <Icon name="Filter" size={20} className="text-gray-500" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-[#E74856] hover:bg-[#d13a48] text-white font-bold shadow-lg" 
                    : "border-2 border-gray-300 hover:border-[#E74856] font-medium"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExtensions.map((ext, index) => (
                <Card 
                  key={ext.id} 
                  className="border-2 border-gray-200 hover:border-[#00A2FF] transition-all hover:shadow-xl hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#E74856] to-[#00A2FF] rounded-xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                        {ext.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{ext.name}</CardTitle>
                        <div className="flex gap-2 flex-wrap">
                          <Badge className="bg-[#E74856] text-white">{ext.category}</Badge>
                          <Badge variant="outline" className="border-[#00A2FF] text-[#00A2FF]">
                            <Icon name="Download" size={14} className="mr-1" />
                            {ext.downloads}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{ext.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#00A2FF] hover:bg-[#0091e6] text-white font-bold">
                      <Icon name="Download" size={20} className="mr-2" />
                      Скачать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredExtensions.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl text-gray-500">Расширений в этой категории пока нет</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E74856] to-[#00A2FF] rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              R
            </div>
            <h3 className="text-2xl font-black">ROBLOX EXTENSIONS</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Платформа для создания и публикации расширений для Roblox
          </p>
          <div className="flex gap-6 justify-center text-gray-400">
            <button className="hover:text-[#E74856] transition-colors flex items-center gap-2">
              <Icon name="Github" size={20} />
              GitHub
            </button>
            <button className="hover:text-[#00A2FF] transition-colors flex items-center gap-2">
              <Icon name="MessageCircle" size={20} />
              Discord
            </button>
            <button className="hover:text-[#FFD700] transition-colors flex items-center gap-2">
              <Icon name="BookOpen" size={20} />
              Документация
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
