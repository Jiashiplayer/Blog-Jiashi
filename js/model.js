const model = {
	header:`<nav class="navbar navbar-inverse" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
					<span class="sr-only">切换导航</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="../index.html">Jiashi</a>
			</div>

			<div class="navbar-right collapse navbar-collapse" id="example-navbar-collapse">
				<form class="navbar-form navbar-left" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
						<button type="submit" class="btn glyphicon glyphicon-search"></button>
					</div>
				</form>
				<ul class="nav navbar-nav">
					<!-- <li class="active"><a href="../index.html">首页</a></li> -->
					<!-- <li><a href="#">SVN</a></li> -->
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">管理<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="../manage/addArticle.html">写文章</a></li>
							<!-- <li class="divider"></li>
							<li><a href="#">分离的链接</a></li>
							<li class="divider"></li>
							<li><a href="#">另一个分离的链接</a></li> -->
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>`
}
$('#topnav').html(model.header)