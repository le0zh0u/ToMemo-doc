import{_ as s,o as t,c as d,f as i,a as e,d as n,e as l}from"./app.32078dbb.js";const a={},o=e("h1",{id:"列表-使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#列表-使用","aria-hidden":"true"},"#"),n(" 列表 使用")],-1),r=e("p",null,"列表是给Memo分组的。",-1),m=e("p",null,"如果当前Memo还没有合适的组别，可以新建一个「待定」的List，然后放进来，之后再细分。",-1),c=e("h2",{id:"批量添加",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#批量添加","aria-hidden":"true"},"#"),n(" 批量添加")],-1),h=e("p",null,"在列表详情页的扩展菜单栏中。",-1),u=e("p",null,"通过批量导入模板，将自己的内容填充进去，然后进行预览，确认没有问题后，直接保存。",-1),v=l(`<p>模板样例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+++ 此行为标题 This line is title
此行为内容 This line is content

+++ 标题只能一行 Title is limited one line
内容可以多行 Content can be multiple lines
行1
行2

+++
此行为内容，因为标题缺失，生成的Memo标题自动使用首行内容填充
If title is empty, will be filled with content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="来自短时记忆" tabindex="-1"><a class="header-anchor" href="#来自短时记忆" aria-hidden="true">#</a> 来自短时记忆</h3><p>如果从电脑上根据模板编辑好批量导入的内容。然后在电脑上复制，手机中通过苹果自带的接力功能同步过来</p><p>从ToMemo应用中进入短时记忆，会自动将剪切板中的内容保存进来，找到后点击进入该短时记忆详情页，在右上角扩展菜单栏中找到「批量导入到List」功能。点击后进入批量导入页面，选择列表，进行预览，确认没有问题，点击保存后，会自动添加到对应列表中。</p>`,5);function _(p,f){return t(),d("div",null,[o,r,m,c,h,u,i(` ::: details 
![import-memo-in-list-demo.gif](/images/list/import-memo-in-list-demo.gif)
::: `),v,i(` ::: details
![import-memo-from-memory-demo.gif](/images/list/import-memo-from-memory-demo.gif)
::: `)])}const x=s(a,[["render",_],["__file","list.html.vue"]]);export{x as default};