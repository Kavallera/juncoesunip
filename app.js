// app.js - Atualizado com dados da noite e turno

// Dados das junções - MANHÃ (já existentes)
const juncoesManha = [
    {
        turno: "manha",
        turmas: ["PSICOLOGIA 5º/4º", "ADMINISTRAÇÃO 5º/4º"],
        disciplina: "METD DO TRABALHO ACADEMICO",
        professores: "KATIA FARAH",
        diaSemana: "QUARTA-FEIRA",
        horario: "DAS 11:15 ÀS 12:05",
        sala: "C-406"
    },
    {
        turno: "manha",
        turmas: ["PSICOLOGIA 3º/2º", "C. COMPUTAÇÃO 3º/2º", "ADMINISTRAÇÃO 3º/2º"],
        disciplina: "HOMEM E SOCIEDADE",
        professores: "BERNADETE",
        diaSemana: "QUARTA-FEIRA",
        horario: "DAS 11:15 ÀS 12:05",
        sala: "C-206"
    },
    {
        turno: "manha",
        turmas: ["PSICOLOGIA 10º", "ADMINISTRAÇÃO 8º"],
        disciplina: "IPT",
        professores: "ADRIANA",
        diaSemana: "SEGUNDA-FEIRA",
        horario: "DAS 11:40 ÀS 12:30",
        sala: "C-208"
    },
    {
        turno: "manha",
        turmas: ["BIOMEDICINA 2º", "FARMÁCIA 2º"],
        disciplina: "BIOSEGURANÇA",
        professores: "JAQUELINE CASTELANI",
        diaSemana: "QUINTA-FEIRA",
        horario: "DAS 10:00 ÀS 10:50",
        sala: "A-404"
    },
    {
        turno: "manha",
        turmas: ["BIOMEDICINA 3º/2º", "FARMÁCIA 3º/2º"],
        disciplina: "BIOQ. ESTRUTURAL",
        professores: "JEFERSON RIBEIRO",
        diaSemana: "QUARTA-FEIRA",
        horario: "DAS 08:25 ÀS 11:15",
        sala: "A-404"
    },
    {
        turno: "manha",
        turmas: ["BIOMEDICINA 3º/2º", "ED. FÍSICA 3º/2º", "FARMÁCIA 3º/2º"],
        disciplina: "ED. AMBIENTAL / HOMEM E SOCIEDADE",
        professores: "VERÔNICA / POLLYANA",
        diaSemana: "SEGUNDA-FEIRA / TERÇA-FEIRA",
        horario: "DAS 11:15 ÀS 12:05",
        sala: "A-404"
    },
    {
        turno: "manha",
        turmas: ["BIOMEDICINA 6º", "FARMÁCIA 6º"],
        disciplina: "I.P.T",
        professores: "VERÔNICA",
        diaSemana: "QUARTA-FEIRA",
        horario: "DAS 11:15 ÀS 12:05",
        sala: "A-503"
    }
];

// Dados das junções - NOITE (novos dados fornecidos)
const juncoesNoite = [
    {
        turno: "noite",
        turmas: ["ARQUITETURA 8°", "ADMINISTRAÇÃO 8°"],
        disciplina: "IPT",
        professores: "VALDECI",
        diaSemana: "16/03, 01/04, 27/04",
        horario: "18H20 - 19H10",
        sala: "C-501"
    },
    {
        turno: "noite",
        turmas: ["D GRAFICO 4°", "TI/ADS 4°"],
        disciplina: "DIREITOS HUMANOS",
        professores: "A CONFIRMAR",
        diaSemana: "A CONFIRMAR",
        horario: "A CONFIRMAR",
        sala: "A CONFIRMAR"
    },
    {
        turno: "noite",
        turmas: ["FARMACIA 2°/3°", "BIOMEDICINA 2°/3°"],
        disciplina: "BIOQUIMICA ESTRUTURAL",
        professores: "MARCO / JEFERSON",
        diaSemana: "QUARTA",
        horario: "19H10-22H",
        sala: "A-602"
    },
    {
        turno: "noite",
        turmas: ["FARMACIA 2°/3°", "BIOMEDICINA 2°/3°"],
        disciplina: "EDUCAÇÃO AMBIENTAL",
        professores: "A CONFIRMAR",
        diaSemana: "TERÇA",
        horario: "18H20-19H10",
        sala: "A CONFIRMAR"
    },
    {
        turno: "noite",
        turmas: ["BIOMEDICINA 2°/3°"],
        disciplina: "HOMEM E SOCIEDADE",
        professores: "JULIANA TAKAHASHI",
        diaSemana: "SEXTA",
        horario: "19H35-20H25",
        sala: "A CONFIRMAR"
    },
    {
        turno: "noite",
        turmas: ["BIOMEDICINA 4°/5°", "FARMÁCIA 4°/5°"],
        disciplina: "DIREITOS HUMANOS",
        professores: "JULIANA TAKAHASHI",
        diaSemana: "SEGUNDA",
        horario: "18H20-19H10",
        sala: "A-402"
    },
    {
        turno: "noite",
        turmas: ["BIOMEDICINA 4°/5°", "FARMÁCIA 4°/5°"],
        disciplina: "MTA",
        professores: "POLYANA",
        diaSemana: "TERÇA",
        horario: "18H20-19H10",
        sala: "A-402"
    },
    {
        turno: "noite",
        turmas: ["FARMÁCIA 4°/5°"],
        disciplina: "TOXICOLOGIA E ANALISES TOXICOLOGICAS",
        professores: "ADAIR / JAQUELINE",
        diaSemana: "QUARTA",
        horario: "19H10-22H00",
        sala: "A CONFIRMAR"
    },
    {
        turno: "noite",
        turmas: ["ENFERMAGEM 2°/3°", "FISIOTERAPIA 2°/3°"],
        disciplina: "EDUCAÇÃO AMBIENTAL",
        professores: "CLAUDIA FIGUEIREDO",
        diaSemana: "SEGUNDA",
        horario: "18H20-19H10",
        sala: "A-403"
    },
    {
        turno: "noite",
        turmas: ["ENFERMAGEM 4°", "FARMACIA 4°"],
        disciplina: "POLITICAS DE SAUDE",
        professores: "CLAUDIA FIGUEIREDO",
        diaSemana: "SEXTA",
        horario: "18H20-19H10",
        sala: "A-402"
    },
    {
        turno: "noite",
        turmas: ["ENFERMAGEM 4°/5°", "FISIOTERAPIA 4°/5°"],
        disciplina: "DIREITOS HUMANOS",
        professores: "RACHEL",
        diaSemana: "TERÇA",
        horario: "18H20-19H10",
        sala: "A-303"
    },
    {
        turno: "noite",
        turmas: ["ENFERMAGEM 4°/5°", "FISIOTERAPIA 4°/5°"],
        disciplina: "MTA",
        professores: "A CONFIRMAR",
        diaSemana: "A CONFIRMAR",
        horario: "A CONFIRMAR",
        sala: "A CONFIRMAR"
    },
    {
        turno: "noite",
        turmas: ["ADMINISTRAÇÃO 2°/3°", "ARQUITETURA 2°/3°"],
        disciplina: "HOMEM E SOCIEDADE",
        professores: "MARILYN",
        diaSemana: "16/03, 06/04, 27/04",
        horario: "18H20-19H10",
        sala: "C-407"
    },
    {
        turno: "noite",
        turmas: ["ADMINISTRAÇÃO 4°/5°", "ARQUITETURA 4°/5°"],
        disciplina: "MTA",
        professores: "MARILYN",
        diaSemana: "01/03, 25/03, 15/04, 29/04",
        horario: "18H20-19H10",
        sala: "C-207"
    },
    {
        turno: "noite",
        turmas: ["CIÊNCIAS ECONÔMICAS 2°/3°", "REL. INTERNACIONAIS 2°/3°"],
        disciplina: "CIÊNCIA POLITICA",
        professores: "EVANDRO",
        diaSemana: "QUARTA",
        horario: "19H10-22H",
        sala: "C-507"
    },
    {
        turno: "noite",
        turmas: ["CIÊNCIAS ECONÔMICAS 2°/3°", "REL. INTERNACIONAIS 2°/3°"],
        disciplina: "EDUCAÇÃO AMBIENTAL",
        professores: "JULIA PETTA",
        diaSemana: "SEGUNDA",
        horario: "18H20-19H10",
        sala: "C-507"
    },
    {
        turno: "noite",
        turmas: ["REL. INTERNACIONAIS 2°/3°"],
        disciplina: "HOMEM E SOCIEDADE",
        professores: "EVANDRO",
        diaSemana: "QUARTA",
        horario: "18H20-19H10",
        sala: "C-507"
    },
    {
        turno: "noite",
        turmas: ["CIÊNCIAS ECONÔMICAS 4°/5°"],
        disciplina: "ECONOMIA BRASILEIRA CONTEMPORANEA",
        professores: "IVAN",
        diaSemana: "QUARTA",
        horario: "19H10-20H25",
        sala: "C-506"
    },
    {
        turno: "noite",
        turmas: ["CIÊNCIAS ECONÔMICAS 4°/5°"],
        disciplina: "ESTATISTICA",
        professores: "PATRICIA",
        diaSemana: "SEXTA",
        horario: "19H35-20H25",
        sala: "C-506"
    },
    {
        turno: "noite",
        turmas: ["REL. INTERNACIONAIS 4°/5°"],
        disciplina: "MTA",
        professores: "PATRICIA",
        diaSemana: "SEXTA",
        horario: "20H45-21H35",
        sala: "C-506"
    },
    {
        turno: "noite",
        turmas: ["CIÊNCIAS ECONÔMICAS 8°"],
        disciplina: "INSTITUIÇÕES DE DIREITO",
        professores: "PAULO OLIVEIRA",
        diaSemana: "TERÇA",
        horario: "18H20-19H10",
        sala: "C-501"
    },
    {
        turno: "noite",
        turmas: ["ADMINISTRAÇÃO 8°"],
        disciplina: "IPT",
        professores: "VALDECI",
        diaSemana: "SEGUNDA",
        horario: "18H20-19H10",
        sala: "C-501"
    },
    {
        turno: "noite",
        turmas: ["JORNALISMO 2°/3°"],
        disciplina: "EDUCAÇÃO AMBIENTAL",
        professores: "GISELE RONCON",
        diaSemana: "TERÇA",
        horario: "A CONFIRMAR",
        sala: "C-308"
    },
    {
        turno: "noite",
        turmas: ["JORNALISMO 2°/3°"],
        disciplina: "HISTORIA DA ARTE",
        professores: "LAURA",
        diaSemana: "QUARTA",
        horario: "A CONFIRMAR",
        sala: "C-308"
    },
    {
        turno: "noite",
        turmas: ["PROPAGANDA E MARKETING 2°/3°"],
        disciplina: "HOMEM E SOCIEDADE",
        professores: "ELVIS",
        diaSemana: "SEGUNDA",
        horario: "A CONFIRMAR",
        sala: "C-308"
    },
    {
        turno: "noite",
        turmas: ["JORNALISMO 4°/5°"],
        disciplina: "MTA",
        professores: "MERILYN",
        diaSemana: "SEXTA",
        horario: "A CONFIRMAR",
        sala: "C-405"
    },
    {
        turno: "noite",
        turmas: ["PROPAGANDA E MARKETING 4°/5"],
        disciplina: "SOCIOLOGIA E COMUNICAÇÃO",
        professores: "A CONFIRMAR",
        diaSemana: "SEGUNDA",
        horario: "A CONFIRMAR",
        sala: "C-405"
    }
];

// Combina todos os dados
const juncoesData = [...juncoesManha, ...juncoesNoite];

// PWA Variáveis
let deferredPrompt;
const installButton = document.getElementById('installButton');
const splashScreen = document.getElementById('splashScreen');
const offlineIndicator = document.getElementById('offlineIndicator');
let turnoAtivo = 'todos'; // 'todos', 'manha', 'noite'

// Função para inicializar o app
function initApp() {
    // Mostrar splash screen por 2 segundos
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Verificar conexão
    updateOnlineStatus();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Inicializar dados
    setTimeout(() => {
        initData();
        initTurnoSelector();
        initFilters();
        exibirJuncoes(juncoesData);
        atualizarContador(juncoesData.length);
    }, 500);
}

// Função para atualizar status da conexão
function updateOnlineStatus() {
    if (navigator.onLine) {
        offlineIndicator.style.display = 'none';
    } else {
        offlineIndicator.style.display = 'block';
    }
}

// Inicializar seletor de turno
function initTurnoSelector() {
    const turnoBtns = document.querySelectorAll('.turno-btn');
    const filterTurno = document.getElementById('filterTurno');
    
    turnoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            turnoBtns.forEach(b => b.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Atualizar turno ativo
            turnoAtivo = this.dataset.turno;
            
            // Atualizar select de filtro
            if (turnoAtivo === 'todos') {
                filterTurno.value = '';
            } else if (turnoAtivo === 'manha') {
                filterTurno.value = 'manha';
            } else if (turnoAtivo === 'noite') {
                filterTurno.value = 'noite';
            }
            
            // Aplicar filtros
            aplicarFiltros();
        });
    });
    
    // Sincronizar select com botões
    filterTurno.addEventListener('change', function() {
        const turno = this.value;
        
        // Atualizar botões
        turnoBtns.forEach(btn => btn.classList.remove('active'));
        
        if (turno === '') {
            document.querySelector('.turno-btn[data-turno="todos"]').classList.add('active');
            turnoAtivo = 'todos';
        } else if (turno === 'manha') {
            document.querySelector('.turno-btn[data-turno="manha"]').classList.add('active');
            turnoAtivo = 'manha';
        } else if (turno === 'noite') {
            document.querySelector('.turno-btn[data-turno="noite"]').classList.add('active');
            turnoAtivo = 'noite';
        }
        
        // Aplicar filtros
        aplicarFiltros();
    });
}

// PWA: Detectar se pode ser instalado
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'flex';
});

// PWA: Instalar app
installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installButton.style.display = 'none';
        }
        deferredPrompt = null;
    }
});

// PWA: Verificar se já está instalado
window.addEventListener('appinstalled', () => {
    installButton.style.display = 'none';
});

// Verificar se está em modo standalone (já instalado)
if (window.matchMedia('(display-mode: standalone)').matches) {
    installButton.style.display = 'none';
}

// Inicializar dados
function initData() {
    const juncoesContainer = document.getElementById('juncoesContainer');
    const filterCurso = document.getElementById('filterCurso');
    const filterDia = document.getElementById('filterDia');
    const filterDisciplina = document.getElementById('filterDisciplina');
    const btnSearch = document.getElementById('btnSearch');
    const btnReset = document.getElementById('btnReset');
    const totalJuncoes = document.getElementById('totalJuncoes');

    let cursosSet = new Set();
    let diasSet = new Set();

    // Extrair cursos e dias únicos
    juncoesData.forEach(juncao => {
        juncao.turmas.forEach(turma => {
            const cursoMatch = turma.match(/^[A-ZÀ-Ú\s\\.]+/);
            if (cursoMatch) {
                const curso = cursoMatch[0].trim();
                // Limpar curso
                const cursoLimpo = curso.replace(/^\d+\s*/, '').replace(/\.$/, '').trim();
                if (cursoLimpo) cursosSet.add(cursoLimpo);
            }
        });
        
        // Adicionar dia formatado
        if (juncao.diaSemana && juncao.diaSemana !== 'A CONFIRMAR') {
            diasSet.add(formatarDia(juncao.diaSemana));
        }
    });

    // Popular dropdown de cursos
    Array.from(cursosSet).sort().forEach(curso => {
        const option = document.createElement('option');
        option.value = curso;
        option.textContent = curso;
        filterCurso.appendChild(option);
    });

    // Popular dropdown de dias
    Array.from(diasSet).sort().forEach(dia => {
        const option = document.createElement('option');
        option.value = dia;
        option.textContent = dia;
        filterDia.appendChild(option);
    });

    // Função para exibir junções
    function exibirJuncoes(juncoes) {
        juncoesContainer.innerHTML = '';
        
        if (juncoes.length === 0) {
            juncoesContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>Nenhuma junção encontrada</h3>
                    <p>Tente alterar os filtros de busca.</p>
                </div>
            `;
            return;
        }
        
        juncoes.forEach(juncao => {
            const card = document.createElement('div');
            card.className = `juncao-card ${juncao.turno}`;
            
            const numCursos = juncao.turmas.length;
            const cursosTexto = numCursos === 1 ? '1 curso' : `${numCursos} cursos`;
            
            card.innerHTML = `
                <div class="card-header">
                    <div class="disciplina-nome">${juncao.disciplina}</div>
                    <div class="professor"><i class="fas fa-chalkboard-teacher"></i> ${juncao.professores}</div>
                </div>
                <div class="card-body">
                    <div class="info-row">
                        <div class="info-icon"><i class="fas fa-calendar-day"></i></div>
                        <div class="info-text">
                            <div class="info-label">DIA</div>
                            <div class="info-value">${juncao.diaSemana || 'A CONFIRMAR'}</div>
                        </div>
                    </div>
                    
                    <div class="info-row">
                        <div class="info-icon"><i class="fas fa-clock"></i></div>
                        <div class="info-text">
                            <div class="info-label">HORÁRIO</div>
                            <div class="info-value">${juncao.horario || 'A CONFIRMAR'}</div>
                        </div>
                    </div>
                    
                    <div class="info-row">
                        <div class="info-icon"><i class="fas fa-door-open"></i></div>
                        <div class="info-text">
                            <div class="info-label">SALA</div>
                            <div class="info-value">${juncao.sala || 'A CONFIRMAR'}</div>
                        </div>
                    </div>
                    
                    <div class="cursos-container">
                        <div class="cursos-label">
                            <i class="fas fa-users"></i> CURSOS ENVOLVIDOS (${cursosTexto})
                        </div>
                        <div class="cursos-list">
                            ${juncao.turmas.map(turma => `
                                <div class="curso-tag">
                                    <i class="fas fa-graduation-cap"></i> ${turma}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            juncoesContainer.appendChild(card);
        });
    }

    // Formatar dia da semana
    function formatarDia(dia) {
        if (!dia || dia === 'A CONFIRMAR') return dia;
        
        if (dia.includes('/')) {
            // Se for datas, retorna como está
            return dia;
        }
        
        // Converter para formato legível
        const diasMap = {
            'SEGUNDA': 'Segunda-feira',
            'TERÇA': 'Terça-feira',
            'QUARTA': 'Quarta-feira',
            'QUINTA': 'Quinta-feira',
            'SEXTA': 'Sexta-feira',
            'SEGUNDA-FEIRA': 'Segunda-feira',
            'TERÇA-FEIRA': 'Terça-feira',
            'QUARTA-FEIRA': 'Quarta-feira',
            'QUINTA-FEIRA': 'Quinta-feira',
            'SEXTA-FEIRA': 'Sexta-feira'
        };
        
        const diaUpper = dia.toUpperCase();
        return diasMap[diaUpper] || dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase();
    }

    // Aplicar filtros
    function aplicarFiltros() {
        const turnoSelecionado = document.getElementById('filterTurno').value;
        const cursoSelecionado = document.getElementById('filterCurso').value;
        const diaSelecionado = document.getElementById('filterDia').value;
        const disciplinaFiltro = document.getElementById('filterDisciplina').value.toLowerCase();
        
        const juncoesFiltradas = juncoesData.filter(juncao => {
            // Filtrar por turno
            if (turnoSelecionado && juncao.turno !== turnoSelecionado) {
                return false;
            }
            
            // Filtrar por curso
            if (cursoSelecionado) {
                const cursoEncontrado = juncao.turmas.some(turma => {
                    const cursoTurma = turma.replace(/^\d+\s*/, '').replace(/\.$/, '').trim();
                    return cursoTurma.includes(cursoSelecionado);
                });
                if (!cursoEncontrado) return false;
            }
            
            // Filtrar por dia
            if (diaSelecionado) {
                const diaFormatado = formatarDia(juncao.diaSemana);
                if (diaFormatado !== diaSelecionado && !juncao.diaSemana.includes(diaSelecionado)) {
                    return false;
                }
            }
            
            // Filtrar por disciplina
            if (disciplinaFiltro && !juncao.disciplina.toLowerCase().includes(disciplinaFiltro)) {
                return false;
            }
            
            return true;
        });
        
        exibirJuncoes(juncoesFiltradas);
        atualizarContador(juncoesFiltradas.length);
    }

    // Resetar filtros
    function resetarFiltros() {
        document.getElementById('filterTurno').value = '';
        document.getElementById('filterCurso').value = '';
        document.getElementById('filterDia').value = '';
        document.getElementById('filterDisciplina').value = '';
        
        // Resetar botões de turno
        document.querySelectorAll('.turno-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.turno-btn[data-turno="todos"]').classList.add('active');
        turnoAtivo = 'todos';
        
        exibirJuncoes(juncoesData);
        atualizarContador(juncoesData.length);
    }

    // Atualizar contador
    function atualizarContador(total) {
        totalJuncoes.textContent = `${total} ${total === 1 ? 'junção' : 'junções'}`;
    }

    // Event Listeners
    btnSearch.addEventListener('click', aplicarFiltros);
    btnReset.addEventListener('click', resetarFiltros);
    filterDisciplina.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') aplicarFiltros();
    });
    filterCurso.addEventListener('change', aplicarFiltros);
    filterDia.addEventListener('change', aplicarFiltros);

    // Armazenar funções no escopo global
    window.appFunctions = {
        exibirJuncoes,
        aplicarFiltros,
        resetarFiltros,
        atualizarContador
    };
}

// Inicializar filtros
function initFilters() {
    // Função para salvar filtros no localStorage
    function salvarFiltros() {
        const filtros = {
            turno: document.getElementById('filterTurno').value,
            curso: document.getElementById('filterCurso').value,
            dia: document.getElementById('filterDia').value,
            disciplina: document.getElementById('filterDisciplina').value
        };
        localStorage.setItem('unip_filtros', JSON.stringify(filtros));
    }

    // Função para carregar filtros do localStorage
    function carregarFiltros() {
        const filtrosSalvos = localStorage.getItem('unip_filtros');
        if (filtrosSalvos) {
            const filtros = JSON.parse(filtrosSalvos);
            document.getElementById('filterTurno').value = filtros.turno || '';
            document.getElementById('filterCurso').value = filtros.curso || '';
            document.getElementById('filterDia').value = filtros.dia || '';
            document.getElementById('filterDisciplina').value = filtros.disciplina || '';
            
            // Atualizar botões de turno
            if (filtros.turno === 'manha') {
                document.querySelector('.turno-btn[data-turno="manha"]').classList.add('active');
                turnoAtivo = 'manha';
            } else if (filtros.turno === 'noite') {
                document.querySelector('.turno-btn[data-turno="noite"]').classList.add('active');
                turnoAtivo = 'noite';
            } else {
                document.querySelector('.turno-btn[data-turno="todos"]').classList.add('active');
                turnoAtivo = 'todos';
            }
            
            if (filtros.turno || filtros.curso || filtros.dia || filtros.disciplina) {
                setTimeout(() => {
                    window.appFunctions.aplicarFiltros();
                }, 100);
            }
        }
    }

    // Adicionar listeners para salvar filtros
    document.getElementById('filterTurno').addEventListener('change', salvarFiltros);
    document.getElementById('filterCurso').addEventListener('change', salvarFiltros);
    document.getElementById('filterDia').addEventListener('change', salvarFiltros);
    document.getElementById('filterDisciplina').addEventListener('input', salvarFiltros);

    // Carregar filtros salvos
    carregarFiltros();
}

// Service Worker Registration para PWA offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        const swContent = `
            self.addEventListener('install', event => {
                event.waitUntil(
                    caches.open('unip-app-v2').then(cache => {
                        return cache.addAll([
                            './',
                            './index.html',
                            './style.css',
                            './app.js',
                            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
                            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
                        ]);
                    })
                );
            });

            self.addEventListener('fetch', event => {
                event.respondWith(
                    caches.match(event.request).then(response => {
                        return response || fetch(event.request);
                    })
                );
            });
        `;

        const blob = new Blob([swContent], { type: 'application/javascript' });
        const swUrl = URL.createObjectURL(blob);
        
        navigator.serviceWorker.register(swUrl)
            .then(registration => {
                console.log('Service Worker registrado com sucesso:', registration.scope);
            })
            .catch(error => {
                console.log('Falha ao registrar Service Worker:', error);
            });
    });
}

// Inicializar app quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);

// Prevenir comportamento padrão em iOS
document.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });