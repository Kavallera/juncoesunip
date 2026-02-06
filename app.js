// app.js

// Dados das junções
const juncoesData = [
    {
        turmas: ["PSICOLOGIA 5º/4º", "ADMINISTRAÇÃO 5º/4º"],
        disciplina: "METD DO TRABALHO ACADEMICO",
        professores: "KATIA FARAH",
        diaSemana: "QUARTA-FEIRA",
        horario: "DAS 11:15 ÀS 12:05",
        sala: "C-406"
    },
    {
        turmas: ["PSICOLOGIA 3º/2º", "C. COMPUTAÇÃO 3º/2º", "ADMINISTRAÇÃO 3º/2º"],
        disciplina: "HOMEM E SOCIEDADE",
        professores: "BERNADETE",
        diaSemana: "QUARTA-FEIRA",
        horario: "DAS 11:15 ÀS 12:05",
        sala: "C-206"
    },
    {
        turmas: ["PSICOLOGIA 10º", "ADMINISTRAÇÃO 8º"],
        disciplina: "IPT",
        professores: "ADRIANA",
        diaSemana: "SEGUNDA-FEIRA",
        horario: "DAS 11:40 ÀS 12:30",
        sala: "C-208"
    },
    {
        turmas: ["BIOMEDICINA 2º", "FARMÁCIA 2º"],
        disciplina: "BIOSEGURANÇA",
        professores: "JAQUELINE CASTELANI",
        diaSemana: "QUINTA-FEIRA",
        horario: "DAS 10:00 ÀS 10:50",
        sala: "A-404"
    },
    {
        turmas: ["BIOMEDICINA 3º/2º", "FARMÁCIA 3º/2º"],
        disciplina: "BIOQ. ESTRUTURAL",
        professores: "JEFERSON RIBEIRO",
        diaSemana: "QUARTA-FEIRA",
        horario: "DAS 08:25 ÀS 11:15",
        sala: "A-404"
    },
    {
        turmas: ["BIOMEDICINA 3º/2º", "ED. FÍSICA 3º/2º", "FARMÁCIA 3º/2º"],
        disciplina: "ED. AMBIENTAL / HOMEM E SOCIEDADE",
        professores: "VERÔNICA / POLLYANA",
        diaSemana: "SEGUNDA-FEIRA / TERÇA-FEIRA",
        horario: "DAS 11:15 ÀS 12:05",
        sala: "A-404"
    },
    {
        turmas: ["BIOMEDICINA 6º", "FARMÁCIA 6º"],
        disciplina: "I.P.T",
        professores: "VERÔNICA",
        diaSemana: "QUARTA-FEIRA",
        horario: "DAS 11:15 ÀS 12:05",
        sala: "A-503"
    }
];

// PWA Variáveis
let deferredPrompt;
const installButton = document.getElementById('installButton');
const splashScreen = document.getElementById('splashScreen');
const offlineIndicator = document.getElementById('offlineIndicator');

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
            const cursoMatch = turma.match(/^[A-ZÀ-Ú\s]+/);
            if (cursoMatch) {
                cursosSet.add(cursoMatch[0].trim());
            }
        });
        diasSet.add(juncao.diaSemana);
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
        option.textContent = formatarDia(dia);
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
            card.className = 'juncao-card';
            
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
                            <div class="info-label">DIA DA SEMANA</div>
                            <div class="info-value">${formatarDia(juncao.diaSemana)}</div>
                        </div>
                    </div>
                    
                    <div class="info-row">
                        <div class="info-icon"><i class="fas fa-clock"></i></div>
                        <div class="info-text">
                            <div class="info-label">HORÁRIO</div>
                            <div class="info-value">${juncao.horario}</div>
                        </div>
                    </div>
                    
                    <div class="info-row">
                        <div class="info-icon"><i class="fas fa-door-open"></i></div>
                        <div class="info-text">
                            <div class="info-label">SALA</div>
                            <div class="info-value">${juncao.sala}</div>
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
        if (dia.includes('/')) {
            return dia.split(' / ').map(d => 
                d.charAt(0).toUpperCase() + d.slice(1).toLowerCase()
            ).join(' / ');
        }
        return dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase();
    }

    // Aplicar filtros
    function aplicarFiltros() {
        const cursoSelecionado = filterCurso.value;
        const diaSelecionado = filterDia.value;
        const disciplinaFiltro = filterDisciplina.value.toLowerCase();
        
        const juncoesFiltradas = juncoesData.filter(juncao => {
            if (cursoSelecionado) {
                const cursoEncontrado = juncao.turmas.some(turma => {
                    return turma.includes(cursoSelecionado);
                });
                if (!cursoEncontrado) return false;
            }
            
            if (diaSelecionado && !juncao.diaSemana.includes(diaSelecionado)) {
                return false;
            }
            
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
        filterCurso.value = '';
        filterDia.value = '';
        filterDisciplina.value = '';
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
            document.getElementById('filterCurso').value = filtros.curso || '';
            document.getElementById('filterDia').value = filtros.dia || '';
            document.getElementById('filterDisciplina').value = filtros.disciplina || '';
            
            if (filtros.curso || filtros.dia || filtros.disciplina) {
                setTimeout(() => {
                    window.appFunctions.aplicarFiltros();
                }, 100);
            }
        }
    }

    // Adicionar listeners para salvar filtros
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
                    caches.open('unip-app-v1').then(cache => {
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